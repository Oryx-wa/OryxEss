using System;
using System.Linq;
using OryxESS.Data.Infrastructure;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using OryxESS.webapi.Infrastructure.Core;
using OryxESS.Entities.iou;
using Microsoft.Extensions.Logging;
using OryxESS.webapi.ViewModels;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxESS.webapi.Controllers.iou
{

    [Produces("application/json")]
    [Route("api/iou")]
    [Controller]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public class iouController : BaseController
    {

        
        private IEntityBaseRepository<iouHeader> _repository;
        private IEntityBaseRepository<iouPayment> _repositoryP;
        private IEntityBaseRepository<iouStatus> _repositoryS;

        public iouController(IEntityBaseRepository<iouHeader> repository,
            IEntityBaseRepository<Error> errorsRepository, IUnitOfWork unitOfWork,
            ILogger<iouController> logger, IEntityBaseRepository<iouPayment> repositoryP,
            IEntityBaseRepository<iouStatus> repositoryS) : base(errorsRepository, unitOfWork,logger)

        {
            _repository = repository;
            _repositoryP = repositoryP;
            _repositoryS = repositoryS;
            
        }

        // GET: api/values
        [HttpGet]
        public  JsonResult Get()
        {
            try
            {
                var claims = User.Claims.Select(x => new { x.Type, x.Value });
                var iouHeaders = _repository.GetAll();
                var iouHeadervm = iouHeaders.Select(x => iouHeaderViewModel.FromEntity(x));

                if(iouHeadervm == null)
                {
                    return Json(null);
                }
                return Json(iouHeadervm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save employee", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save employee");
            }            
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public  JsonResult Get(int id) 
        {
            try
            {
                var iouH = _repository.GetSingle(id);
                var iouHvm = iouHeaderViewModel.FromEntity(iouH);

                var iouPayments = _repositoryP.GetAll().Where(i => i.IouId == id);
                var iouStatuses = _repositoryS.GetAll().Where(i => i.IouId == id);

                var iouPaymentsvm = iouPayments.Select(x => iouPaymentViewModel.FromEntity(x));
                var iouStatusesvm = iouStatuses.Select(x => iouStatusViewModel.FromEntity(x));

                if(iouHvm == null)
                {
                    return Json(null);
                }

                iouHvm.iouPayments = iouPaymentsvm;
                iouHvm.iouStatuses = iouStatusesvm;

                return Json(iouHvm);



            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to save employee", ex);
                
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save employee");
            }
            //Response.StatusCode = (int)HttpStatusCode.BadRequest;
            //return Json(new { Message = "Failed", ModelState = ModelState });
        }

        // POST api/values
        [HttpPost]
        public  JsonResult Post([FromBody]iouHeaderViewModel vm)
        {
            try
            {


            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to save employee", ex);
                
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save employee");
            }
            Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(new { Message = "Failed", ModelState = ModelState });
        }

        

        
        public  JsonResult Post([FromBody] string value)
        {
            throw new NotImplementedException();
        }

        public  JsonResult Put(int id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        public  JsonResult Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
