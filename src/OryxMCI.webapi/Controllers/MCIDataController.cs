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
    public class MCIDataController : BaseController
    {
        private ILogger<MCIDataController> _logger;
        private IEntityBaseRepository<MCIData> _repository;

        public MCIDataController(IEntityBaseRepository<MCIData> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<MCIDataController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]MCIDataViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMCIData = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new MCIData");

                    _repository.Add(newMCIData);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(MCIDataViewModel.FromEntity(newMCIData));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save MCIData", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save MCIData");
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
                var MCIDatas = _repository.GetAll();

                var MCIDatasVm = MCIDatas.Select(x => MCIDataViewModel.FromEntity(x));

                if (MCIDatasVm == null)
                {
                    return Json(null);
                }
                return Json(MCIDatasVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get MCIDatas", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get MCIDatas");
            }
        }

        public override JsonResult Get(int id)
        {
            try
            {
                var Md = _repository.GetSingle(id);
                var MdVm = MCIDataViewModel.FromEntity(Md);

                if (MdVm == null)
                {
                    return Json(null);
                }

                return Json(MdVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get MCIData", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get MCIData");
            }
        }

        public override JsonResult Get(int pageNo = 1, int pageSize = 50, string orderBy = "CreateDate")
        {
            throw new NotImplementedException();
        }
    }
}