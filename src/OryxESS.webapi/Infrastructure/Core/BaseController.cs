using System;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using OryxESS.Data.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxESS.webapi.Infrastructure.Core
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Controller]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public abstract class BaseController : Controller
    {

        //private ILogger<BaseController> _logger;
        

        protected readonly IEntityBaseRepository<Error> _errorsRepository;
        protected readonly IUnitOfWork _unitOfWork;
        protected ILogger<Controller> _logger;


        public BaseController(IEntityBaseRepository<Error> errorsRepository, IUnitOfWork unitOfWork,
            ILogger<Controller> logger)
        {
            _errorsRepository = errorsRepository;
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        

        protected void LogError(Exception ex)
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
