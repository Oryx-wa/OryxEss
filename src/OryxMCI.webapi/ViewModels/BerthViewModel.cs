using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class BerthViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        public static BerthViewModel FromEntity(Berth entity)
        {
            return new BerthViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name
            };
        }

        public Berth ToEntity()
        {
            return new Berth
            {
                Code = Code,
                Id = Id,
                Name = Name
            };
        }
    }
}