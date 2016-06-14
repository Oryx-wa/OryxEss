using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OryMCI.webapi.Infrastructure.Core;
using OryxMCI.Data.Infrastructure;
using OryxMCI.Data.Repositories;
using OryxMCI.Entities;
using OryxMCI.webapi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxMCI.webapi.Controllers
{
    [Route("api/[controller]")]
    public class InspectorController : BaseController
    {
        private ILogger<InspectorController> _logger;
        private IEntityBaseRepository<Inspector> _repository;

        public InspectorController(IEntityBaseRepository<Inspector> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<InspectorController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]InspectorViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newInspector = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Inspector");

                    _repository.Add(newInspector);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(InspectorViewModel.FromEntity(newInspector));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save Inspector", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save Inspector");
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

        public override JsonResult Get()
        {
            try
            {
                var Inspectors = _repository.GetAll();

                var InspectorsVm = Inspectors.Select(x => InspectorViewModel.FromEntity(x));

                if (InspectorsVm == null)
                {
                    return Json(null);
                }
                return Json(InspectorsVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Inspectors", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Inspectors");
            }
        }

        public override JsonResult Get(int id)
        {
            try
            {
                var Ins = _repository.GetSingle(id);
                var InsVm = InspectorViewModel.FromEntity(Ins);

                if (InsVm == null)
                {
                    return Json(null);
                }

                return Json(InsVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Inspector", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Inspector");
            }
        }
    }
}