using System;
using Microsoft.AspNetCore.Mvc;
using OryxMCI.Data.Repositories;
using OryxMCI.Data.Infrastructure;
using OryxMCI.Entities;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryMCI.webapi.Infrastructure.Core
{
    [Route("api/[controller]")]
    public abstract class BaseController : Controller
    {

        //private ILogger<BaseController> _logger;
        

        protected readonly IEntityBaseRepository<Error> _errorsRepository;
        protected readonly IUnitOfWork _unitOfWork;


        public BaseController(IEntityBaseRepository<Error> errorsRepository, IUnitOfWork unitOfWork)
        {
            _errorsRepository = errorsRepository;
            _unitOfWork = unitOfWork;
        }

        // GET: api/values
        [HttpGet]
        public abstract JsonResult Get();


        // GET api/values/5
        [HttpGet("{id}")]
        public abstract JsonResult Get(int id);
        
        private void LogError(Exception ex)
        {
            try
            {
                Error _error = new Error()
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    DateCreated = DateTime.Now
                };

                _errorsRepository.Add(_error);
                _unitOfWork.Commit();
            }
            catch { }
        }
    }
}
