using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.Workflow
{
    public class WorkFlowState : IEntityBase

    {

        public WorkFlowState()
        {
            WorkFlowStateApprovers = new List<WorkFlowStateApprover>();
        }
        public int WorkFlowStateId { get; set; }

        public int WorkFlowId { get; set; }
        [MaxLength(30)]
        public string StateCode { get; set; }

        public bool Status { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

        public ICollection<WorkFlowStateApprover> WorkFlowStateApprovers;

    }

}
