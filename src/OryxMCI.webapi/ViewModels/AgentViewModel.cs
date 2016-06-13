using OryxMCI.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class AgentViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        public static AgentViewModel FromEntity(Agent entity)
        {
            return new AgentViewModel
            {
                Id = entity.Id,
                Code = entity.Code,
                Name = entity.Name
            };
        }

        public Agent ToEntity()
        {
            return new Agent
            {
                Code = Code,
                Id = Id,
                Name = Name
            };
        }



    }
}
