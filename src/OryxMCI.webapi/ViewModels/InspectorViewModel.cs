using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class InspectorViewModel : DefItemViewModel
    {
       

        [Required]
        public bool Current { get; set; }

        public static InspectorViewModel FromEntity(Inspector entity)
        {
            return new InspectorViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
                UserSign = entity.UserSign,
                Current = entity.Current
            };
        }

        public Inspector ToEntity()
        {
            return new Inspector
            {
                Code = Code,
                Id = Id,
                Name = Name,
                UserSign = UserSign,
                Current = Current
            };
        }
    }
}