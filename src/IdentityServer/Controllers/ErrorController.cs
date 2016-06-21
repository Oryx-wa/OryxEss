﻿using System;
using System.Collections.Generic;
using System.Linq;
using IdentityServer4.Core;
using IdentityServer4.Core.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IdentityServer.Models.ErrorViewModels;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace IdentityServer.Controllers
{
    public class ErrorController : Controller
    {
        private readonly ErrorInteraction _errorInteraction;

        public ErrorController(ErrorInteraction errorInteraction)
        {
            _errorInteraction = errorInteraction;
        }

        [Route(Constants.RoutePaths.Error, Name = "Error")]
        public async Task<IActionResult> Index(string id)
        {
            var vm = new ErrorViewModel();

            if (id != null)
            {
                var message = await _errorInteraction.GetRequestAsync(id);
                if (message != null)
                {
                    vm.Error = message;
                }
            }

            return View("Error", vm);
        }
    }
}
