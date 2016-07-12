using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.Workflow
{
    public class WorkFlowStateApprover : IEntityBase
    {

        public int LineId { get; set; }

        public int WorkFlowStateId { get; set; }

        public int EmployeeId { get; set; }

        public bool Status { get; set; }


        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

        public WorkFlowState WorkFlowState { get; set; }
    }
}
