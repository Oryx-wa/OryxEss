using IdentityModel;
using IdentityServer.Models;
using IdentityServer.Models.LoginViewModels;
using IdentityServer.Services;
using IdentityServer4.Core;
using IdentityServer4.Core.Services;
using IdentityServer4.Core.Services.InMemory;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using SignInResult = IdentityServer.Models.LoginViewModels.SignInResult;

namespace IdentityServer.Controllers
{
    [Route("Login/[controller]")]
    [Controller]
    [Authorize]
    public class LoginController : Controller
    {
        //private readonly LoginService _loginService;
        private readonly SignInInteraction _signInInteraction;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ISmsSender _smsSender;
        private ILogger<LoginController> _logger;

        public LoginController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            SignInInteraction signInInteraction,
             IEmailSender emailSender,
            ISmsSender smsSender,
            ILogger<LoginController> logger)
        {
           // _loginService = loginService;
            _userManager = userManager;
            _signInManager = signInManager;
            _signInInteraction = signInInteraction;
            _emailSender = emailSender;
            _smsSender = smsSender;
            _logger = logger;
        }

        [HttpGet(Constants.RoutePaths.Login, Name = "Login")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string id = null, string returnUrl = null)
        {
            var model = new LoginViewModel();
            if (id != null)
            {
                var request = await _signInInteraction.GetRequestAsync(id);
                if (request != null)
                {
                    model.Email = request.LoginHint;
                    model.SignInId = id;
                }
            }

            ViewData["ReturnUrl"] = returnUrl;
            return View(model);
        }

        [HttpPost(Constants.RoutePaths.Login, Name = "Login")]
        //[HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        //public async Task<IActionResult> Index(LoginInputModel model)
        public async Task<IActionResult> Login(LoginInputModel model, string returnUrl = null)
        {

            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    _logger.LogInformation(1, "User logged in.");
                    return model.SignInId != null
                        ? new SignInResult(model.SignInId)
                        : RedirectToLocal(returnUrl);
                }
                //if (_loginService.ValidateCredentials(model.Username, model.Password))
                //{
                //    var user = _loginService.FindByUsername(model.Username);
                //    await IssueCookie(user, "idsvr", "password");

                //    if (model.SignInId != null)
                //    {
                //        return new SignInResult(model.SignInId);
                //    }

                //    return Redirect("~/");
                //}

                //ModelState.AddModelError("", "Invalid username or password.");
            }
            
            var vm = new LoginViewModel(model);
            return View(vm);
        }

        //
        // POST: /Account/Register
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                    // Send an email with this link
                    //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    //var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
                    //    $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    _logger.LogInformation(3, "User created a new account with password.");
                    return RedirectToLocal(returnUrl);
                }
                AddErrors(result);
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }


        //
        // POST: /Account/LogOff
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
            _logger.LogInformation(4, "User logged out.");
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }


        private async Task IssueCookie(
            InMemoryUser user, 
            string idp,
            string amr)
        {
            var name = user.Claims.Where(x => x.Type == JwtClaimTypes.Name).Select(x => x.Value).FirstOrDefault() ?? user.Username;

            var claims = new Claim[] {
                        new Claim(JwtClaimTypes.Subject, user.Subject),
                        new Claim(JwtClaimTypes.Name, name),
                        new Claim(JwtClaimTypes.IdentityProvider, idp),
                        new Claim(JwtClaimTypes.AuthenticationTime, DateTime.UtcNow.ToEpochTime().ToString()),
                    };
            var ci = new ClaimsIdentity(claims, amr, JwtClaimTypes.Name, JwtClaimTypes.Role);
            var cp = new ClaimsPrincipal(ci);

            await HttpContext.Authentication.SignInAsync(Constants.PrimaryAuthenticationType, cp);
        }

        [HttpGet("/ui/external/{provider}", Name = "External")]
        public IActionResult External(string provider, string signInId)
        {
            return new ChallengeResult(provider, new AuthenticationProperties
            {
                RedirectUri = "/ui/external-callback?signInId=" + signInId
            });
        }

        [HttpGet("/ui/external-callback")]
        public async Task<IActionResult> ExternalCallback(string signInId)
        {
            var tempUser = await HttpContext.Authentication.AuthenticateAsync("Temp");
            if (tempUser == null)
            {
                throw new Exception();
            }

            var claims = tempUser.Claims.ToList();

            var userIdClaim = claims.FirstOrDefault(x=>x.Type==JwtClaimTypes.Subject);
            if (userIdClaim == null)
            {
                userIdClaim = claims.FirstOrDefault(x=>x.Type==ClaimTypes.NameIdentifier);
            }
            if (userIdClaim == null)
            {
                throw new Exception("Unknown userid");
            }

            claims.Remove(userIdClaim);

            var provider = userIdClaim.Issuer;
            var userId = userIdClaim.Value;

            //var user = _loginService.FindByExternalProvider(provider, userId);
            //if (user == null)
            //{
            //    user = _loginService.AutoProvisionUser(provider, userId, claims);
            //}

            //await IssueCookie(user, provider, "external");
            await HttpContext.Authentication.SignOutAsync("Temp");

            if (signInId != null)
            {
                return new SignInResult(signInId);
            }

            return Redirect("~/");

        }

        #region "Helpers"
        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "Home");
            }
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }
        #endregion
    }
}
