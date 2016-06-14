using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class PortViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        public static PortViewModel FromEntity(Port entity)
        {
            return new PortViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name
            };
        }

        public Port ToEntity()
        {
            return new Port
            {
                Code = Code,
                Id = Id,
                Name = Name
            };
        }
    }
}