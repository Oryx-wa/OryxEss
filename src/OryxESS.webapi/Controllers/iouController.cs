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

namespace OryxESS.webapi.Controllers
{
    [Route("api/[controller]")]
    [Controller]
    public class iouController : BaseController
    {

        private ILogger<iouController> _logger;
        private IEntityBaseRepository<iouHeader> _repository;
        private IEntityBaseRepository<iouPayment> _repositoryP;
        private IEntityBaseRepository<iouStatus> _repositoryS;

        public iouController(IEntityBaseRepository<iouHeader> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<iouController> logger, IEntityBaseRepository<iouPayment> repositoryP,
            IEntityBaseRepository<iouStatus> repositoryS)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _repositoryP = repositoryP;
            _repositoryS = repositoryS;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        [AllowAnonymous]
        public override JsonResult Get()
        {
            try
            {
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
        [AllowAnonymous]
        public override JsonResult Get(int id)
        {
            try
            {
                var iouH = _repository.GetSingle(id);
                var iouHvm = iouHeaderViewModel.FromEntity(iouH);

                var iouPayments = _repositoryP.GetAll().Where(i => i.iouID == id);
                var iouStatuses = _repositoryS.GetAll().Where(i => i.iouID == id);

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

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
