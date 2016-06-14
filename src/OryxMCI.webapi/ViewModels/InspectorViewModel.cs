using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class InspectorViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        [Required]
        public bool Current { get; set; }

        public static InspectorViewModel FromEntity(Inspector entity)
        {
            return new InspectorViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name,
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
                Current = Current
            };
        }
    }
}