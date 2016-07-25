using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class PortViewModel : DefItemViewModel
    {
        

        public static PortViewModel FromEntity(Port entity)
        {
            return new PortViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
                UserSign = entity.UserSign

            };
        }

        public Port ToEntity()
        {
            return new Port
            {
                Code = Code,
                Id = Id,
                Name = Name,
                UserSign = UserSign
            };
        }
    }
}