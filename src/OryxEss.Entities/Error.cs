using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Entities;

namespace OryxESS.Entities
{
    public class Error : IEntityBase
    {
        public int ID { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
