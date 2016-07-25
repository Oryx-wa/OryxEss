using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OryMCI.webapi.Infrastructure.Core;
using Microsoft.Extensions.Logging;
using OryxMCI.Data.Repositories;
using OryxMCI.Data.Repositories.defitem;
using OryxMCI.Entities;
using OryxMCI.Data.Infrastructure;
using OryxMCI.webapi.ViewModels;
using System.Net;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OryxMCI.webapi.Controllers
{

    [Route("api/[controller]")]
    //[AllowAnonymous]
    public class DefItemController//<T> : BaseController where T : class, IDefItem, new()
    {
        //protected ILogger<DefItemController<T>> _logger;
        //protected IDefItemRepository<T> _repository;
        

        //public DefItemController( IDefItemRepository<T> repository,
        //    IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork
        //    )
        //    : base(_errorsRepository, _unitOfWork)
        //{
        //    _repository = repository;


        //}
        //// POST api/values
        //[HttpPost]
        //public JsonResult Post([FromBody]AgentViewModel vm)
        //{
        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            var DefItem = vm.ToEntity();
        //            _logger.LogInformation("Attempting to save a new Definition");

        //            _repository.Add(DefItem);

        //            _unitOfWork.Commit();

        //            Response.StatusCode = (int)HttpStatusCode.Created;
        //            return Json(DefItemViewModel.FromEntity(DefItem));
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError($"Failed to save", ex);
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json("Failed to save");
        //    }
        //    Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //    return Json(new { Message = "Failed", ModelState = ModelState });
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

        //[HttpGet]
        //public override JsonResult Get()
        //{

        //    try
        //    {
        //        var DefItems = _repository.GetAll();

        //        var DefItemsVm = DefItems.Select(x => DefItemViewModel.FromEntity(x));

        //        if (DefItemsVm == null)
        //        {
        //            return Json(null);
        //        }
        //        return Json(DefItemsVm);

        //        //return new string[] { "value1", "value2" };
        //    }
        //    catch (Exception ex)
        //    {

        //        _logger.LogError($"Failed to get items", ex);
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json("Failed to get items");
        //    }
        //}

        //[HttpGet("{id}")]
        //public override JsonResult Get(int id)
        //{
        //    try
        //    {
        //        var DefItem = _repository.GetSingle(id);
        //        var DefItemVm = DefItemViewModel.FromEntity(DefItem);

        //        if (DefItemVm == null)
        //        {
        //            return Json(null);
        //        }

        //        return Json(DefItemVm);
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError($"Failed to get", ex);
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json("Failed to get");
        //    }
        //}
        //[HttpGet]
        //[Route("GetPaged")]
        ////[Route("api/Agent/{pageNo:int, pageSize:int, orderBy:string}")]
        //public override JsonResult GetPaged([FromQuery]int pageNo = 1, int pageSize = 50, string orderBy = "CreateDate")
        //{
        //    try
        //    {

        //        int total = _repository.Count();

        //        var DefItems = _repository.GetPaged(pageNo, pageSize, orderBy);

        //        var DefsItemVm = DefItems.Select(x => DefItemViewModel.FromEntity(x));


        //        if (DefsItemVm == null)
        //        {
        //            return Json(null);
        //        }


        //        return Json(new PagedResult<DefItemViewModel>(DefsItemVm.ToList(), pageNo, pageSize, total));


        //        //return new string[] { "value1", "value2" };
        //    }
        //    catch (Exception ex)
        //    {

        //        _logger.LogError($"Failed to get", ex);
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json("Failed to get");
        //    }

        //}
    }
}
