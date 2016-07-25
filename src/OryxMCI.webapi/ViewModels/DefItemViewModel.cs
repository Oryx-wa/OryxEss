using System.ComponentModel.DataAnnotations;
using OryxMCI.Entities;

namespace OryxMCI.webapi.ViewModels
{
    public abstract class DefItemViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Name { get; set; }

        public int UserSign
        {
            get; set;
        }

        
    }
}
