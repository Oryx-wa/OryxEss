using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class BerthViewModel : DefItemViewModel
    {
        

        public static BerthViewModel FromEntity(Berth entity)
        {
            return new BerthViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
                UserSign = entity.UserSign,

            };
        }

        public Berth ToEntity()
        {
            return new Berth
            {
                Code = Code,
                Id = Id,
                Name = Name,
                UserSign = UserSign
            };
        }
    }
}