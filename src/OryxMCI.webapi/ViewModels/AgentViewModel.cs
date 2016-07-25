using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class AgentViewModel :DefItemViewModel
    {
        

        public static AgentViewModel FromEntity(Agent entity)
        {
            return new AgentViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
                UserSign = entity.UserSign
            };
        }

        public Agent ToEntity()
        {
            return new Agent
            {
                Code = Code,
                Id = Id,
                Name = Name,
                UserSign = UserSign
            };
        }
    }
}