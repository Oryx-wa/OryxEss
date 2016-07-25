using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OryMCI.webapi.Infrastructure.Core;
using OryxMCI.Data.Infrastructure;
using OryxMCI.Data.Repositories;
using OryxMCI.Data.Repositories.defitem;
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
    public class VesselController : BaseController
    {
        private ILogger<VesselController> _logger;
        private IEntityBaseRepository<Vessel> _repository;

        public VesselController(IDefItemRepository<Vessel> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<VesselController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]VesselViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newVessel = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Vessel");

                    _repository.Add(newVessel);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(VesselViewModel.FromEntity(newVessel));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save Vessel", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save Vessel");
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
        [HttpGet]
        public override JsonResult Get()
        {
            try
            {
                var Vessels = _repository.GetAll();

                var VesselsVm = Vessels.Select(x => VesselViewModel.FromEntity(x));

                if (VesselsVm == null)
                {
                    return Json(null);
                }
                return Json(VesselsVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Vessels", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Vessels");
            }
        }
        [HttpGet("{id}")]
        public override JsonResult Get(int id)
        {
            try
            {
                var Ve = _repository.GetSingle(id);
                var VeVm = VesselViewModel.FromEntity(Ve);

                if (VeVm == null)
                {
                    return Json(null);
                }

                return Json(VeVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Vessel", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Vessel");
            }
        }

        [HttpGet]
        [Route("GetPaged")]
        public override JsonResult GetPaged([FromQuery]int pageNo = 1, int pageSize = 50, string orderBy = "CreateDate")
        {
            try
            {
                int total = _repository.Count();
                var Vessels = _repository.GetPaged(pageNo, pageSize, orderBy);
                var VesselsVm = Vessels.Select(x => VesselViewModel.FromEntity(x));
                if (VesselsVm == null)
                {
                    return Json(null);
                }
                return Json(new PagedResult<VesselViewModel>(VesselsVm.ToList(), pageNo, pageSize, total));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Ports", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Ports");
            }
        }
    }
}