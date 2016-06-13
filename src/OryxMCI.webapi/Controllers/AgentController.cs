﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OryMCI.webapi.Infrastructure.Core;
using Microsoft.Extensions.Logging;
using OryxMCI.Data.Repositories;
using OryxMCI.Entities;
using OryxMCI.Data.Infrastructure;
using OryxMCI.webapi.ViewModels;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxMCI.webapi.Controllers
{
    [Route("api/[controller]")]
    public class AgentController : BaseController
    {
        private ILogger<AgentController> _logger;
        private IEntityBaseRepository<Agent> _repository;

        public AgentController(IEntityBaseRepository<Agent> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<AgentController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }
        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]AgentViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newAgent = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Agent");

                    _repository.Add(newAgent);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(AgentViewModel.FromEntity(newAgent));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save Agent", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to save Agent");
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
                var Agents = _repository.GetAll();

                var AgentsVm = Agents.Select(x => AgentViewModel.FromEntity(x));

                if (AgentsVm == null)
                {
                    return Json(null);
                }
                return Json(AgentsVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get Agents", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Agents");
            }
        }

        public override JsonResult Get(int id)
        {
            try
            {
                var Ag = _repository.GetSingle(id);
                var AgVm = AgentViewModel.FromEntity(Ag);

                if (AgVm == null)
                {
                    return Json(null);
                }

                return Json(AgVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Agent", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get Agent");
            }
        }
    }
}