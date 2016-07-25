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
    public class BerthController : BaseController
    {

        private ILogger<BerthController> _logger;
        private IEntityBaseRepository<Berth> _repository;

        public BerthController(IDefItemRepository<Berth> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<BerthController> logger)
            : base( _errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]BerthViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newBerth = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Berth");

                    _repository.Add(newBerth);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(BerthViewModel.FromEntity(newBerth));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save Berth", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save Berth");
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
                var Agents = _repository.GetAll();

                var AgentsVm = Agents.Select(x => BerthViewModel.FromEntity(x));

                if (AgentsVm == null)
                {
                    return Json(null);
                }
                return Json(AgentsVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get Berths", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Berths");
            }
        }

        [HttpGet("{id}")]
        public override JsonResult Get(int id)
        {
            try
            {
                var Ag = _repository.GetSingle(id);
                var AgVm = BerthViewModel.FromEntity(Ag);

                if (AgVm == null)
                {
                    return Json(null);
                }

                return Json(AgVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Berth", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Berth");
            }
        }
        [HttpGet]
        [Route("GetPaged")]
        //[Route("api/Agent/{pageNo:int, pageSize:int, orderBy:string}")]
        public override JsonResult GetPaged([FromQuery]int pageNo = 1, int pageSize = 50, string orderBy = "CreateDate")
        {
            try
            {

                int total = _repository.Count();

                var Agents = _repository.GetPaged(pageNo, pageSize, orderBy);

                var AgentsVm = Agents.Select(x => BerthViewModel.FromEntity(x));


                if (AgentsVm == null)
                {
                    return Json(null);
                }
                
                return Json(new PagedResult<DefItemViewModel>(AgentsVm.ToList(), pageNo, pageSize, total));


                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get Berths", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Berths");
            }
        }
    }
}