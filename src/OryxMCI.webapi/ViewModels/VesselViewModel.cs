using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class VesselViewModel : DefItemViewModel
    {
        

        public static VesselViewModel FromEntity(Vessel entity)
        {
            return new VesselViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
                UserSign = entity.UserSign
            };
        }

        public Vessel ToEntity()
        {
            return new Vessel
            {
                Code = Code,
                Id = Id,
                Name = Name,
                UserSign = UserSign
            };
        }
    }
}