using Microsoft.AspNetCore.Mvc;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using OryxESS.Data.Infrastructure;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using OryxESS.webapi.ViewModels;
using System.Linq;
using System;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxESS.webapi.Infrastructure.Core
{
    
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Controller]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public abstract class SamplBaseController : BaseController
    {
        

        public SamplBaseController(IEntityBaseRepository<Error> errorsRepository,
                        IUnitOfWork unitOfWork, ILogger<Controller> logger )
            : base(errorsRepository, unitOfWork, logger)
        {
            
        }

        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            return Json(null);
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public  JsonResult Get(int id)
        {
            return null;
        }

        // POST: api/WFTrigger
        [HttpPost]
        public  JsonResult Post([FromBody]BaseViewModel vm)
        {
            return null;
        }

        // PUT: api/WFTrigger/5
        [HttpPut("{id}")]
        public  JsonResult Put(int id, [FromBody]BaseViewModel vm)
        {
            return null;
        }


        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public  JsonResult Delete(int id)
        {
            return null;
        }


       
    }
}
