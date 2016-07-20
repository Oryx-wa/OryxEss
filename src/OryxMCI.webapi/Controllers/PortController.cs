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
    public class PortController : BaseController
    {
        private ILogger<PortController> _logger;
        private IEntityBaseRepository<Port> _repository;

        public PortController(IEntityBaseRepository<Port> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<PortController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]PortViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newPort = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Port");

                    _repository.Add(newPort);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(PortViewModel.FromEntity(newPort));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save Port", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save Port");
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
                var Ports = _repository.GetAll();

                var PortsVm = Ports.Select(x => PortViewModel.FromEntity(x));

                if (PortsVm == null)
                {
                    return Json(null);
                }
                return Json(PortsVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Ports", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Ports");
            }
        }

        public override JsonResult Get(int id)
        {
            try
            {
                var Po = _repository.GetSingle(id);
                var PoVm = PortViewModel.FromEntity(Po);

                if (PoVm == null)
                {
                    return Json(null);
                }

                return Json(PoVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Port", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Port");
            }
        }

        public override JsonResult Get(int pageNo = 1, int pageSize = 50, string orderBy = "CreateDate")
        {
            throw new NotImplementedException();
        }
    }
}