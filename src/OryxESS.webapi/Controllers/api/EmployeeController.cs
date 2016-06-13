using System;
using System.Linq;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using OryxESS.webapi.ViewModels;
using System.Net;
using OryxESS.webapi.Infrastructure.Core;
using OryxESS.Data.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxESS.webapi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [Controller]
    public class EmployeeController : BaseController
    {

        private ILogger<EmployeeController> _logger;
        private IEntityBaseRepository<Employee> _repository;

        public EmployeeController (IEntityBaseRepository<Employee> repository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork,
            ILogger<EmployeeController> logger)
            : base(_errorsRepository, _unitOfWork)
        {
            _repository = repository;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public override JsonResult Get()
        {

            try
            {
                var Employees = _repository.GetAll();

                var EmployeesVm = Employees.Select(x => EmployeeViewModel.FromEntity(x));

                if (EmployeesVm == null)
                {
                    return Json(null);
                }
                return Json(EmployeesVm);

                //return new string[] { "value1", "value2" };
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get employees", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get employees");
            }
        }

        // GET api/values/5
        [Authorize(Roles = "OryxESS.admin")]
        [HttpGet("{id}")]
        public override JsonResult Get(int id)
        {
            try
            {
                var Emp = _repository.GetSingle(id);
                var EmployeeVm = EmployeeViewModel.FromEntity(Emp);

                if (EmployeeVm == null)
                {
                    return Json(null);
                }

                return Json(EmployeeVm);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get employees", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("Failed to get employees");
            }
        }


        // POST api/values
        [HttpPost("")]
        public JsonResult Post([FromBody]EmployeeViewModel vm)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    var newEmployee = vm.ToEntity();
                    _logger.LogInformation("Attempting to save a new Employee");

                    _repository.Add(newEmployee);

                    _unitOfWork.Commit();

                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(EmployeeViewModel.FromEntity(newEmployee));
                }
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
