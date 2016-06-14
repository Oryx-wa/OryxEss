using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class VesselViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        public static VesselViewModel FromEntity(Vessel entity)
        {
            return new VesselViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name
            };
        }

        public Vessel ToEntity()
        {
            return new Vessel
            {
                Code = Code,
                Id = Id,
                Name = Name
            };
        }
    }
}