using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace OryxESS.Entities.Workflow
{
    public class WorkFlow : IEntityBase
    {
        public WorkFlow()
        {
            WorkFlowStates = new List<WorkFlowState>();
        }
        [Key]
        public int WorkFlowId { get; set; }

        public string WorkFlowCode { get; set; }

        [Required, MaxLength(100)]
        public string WorkFlowName { get; set; }
        [Required, MaxLength(30)]
        public string appCode { get; set; }

        public bool Status { get; set; }

        public DateTime CreateDate { get; set; }   
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

        public virtual ICollection<WorkFlowState> WorkFlowStates { get; set; }

    }
}
