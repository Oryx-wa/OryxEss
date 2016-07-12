using Microsoft.AspNetCore.Mvc;
using OryxESS.Data.Infrastructure;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using OryxESS.webapi.Infrastructure.Core;
using Microsoft.Extensions.Logging;
using OryxESS.webapi.ViewModels.workflow;
using OryxESS.Entities.Workflow;
using System.Linq;
using System;
using System.Net;
using Microsoft.AspNetCore.Authorization;

namespace OryxESS.webapi.Controllers.workflow
{
    [Produces("application/json")]
    [Route("api/WFTriggers")]
    [Controller]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public class WFTriggerController : BaseController
    {
        private IEntityBaseRepository<WFTriggers> _repository;

        public WFTriggerController(IEntityBaseRepository<Error> errorsRepository,
             IUnitOfWork unitOfWork, ILogger<WFTriggerController> logger,
             IEntityBaseRepository<WFTriggers> repository)
            : base(errorsRepository, unitOfWork, logger)
        {
            _repository = repository;
        }

        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            try
            {
                var claims = User.Claims.Select(x => new { x.Type, x.Value });
                var WFTriggers = _repository.GetAll();
                var WFTriggervm = WFTriggers.Select(x => WFTriggerViewModel.FromEntity(x));

                if (WFTriggervm == null)
                {
                    return Json(null);
                }
                return Json(WFTriggervm);
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
        public JsonResult Get(int id)
        {
            try
            {
                var WFTrigger = _repository.GetSingle(id);
                var WFTriggervm = WFTriggerViewModel.FromEntity(WFTrigger);

                if (WFTriggervm == null)
                {
                    return Json(null);
                }
                return Json(WFTriggervm);

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save employee", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save employee");
            }
        }

        // POST: api/WFTrigger
        [HttpPost]
        public JsonResult Post([FromBody]WFTriggerViewModel vm)
        {
            return null;
        }

        // PUT: api/WFTrigger/5
        [HttpPut("{id}")]
        public JsonResult Put(int id, [FromBody]WFTriggerViewModel vm)
        {
            return null;
        }


        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            return null;
        }




    }
}
