using System;

namespace OryxMCI.Entities
{
    public class Error: IEntityBase
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
        public DateTime DateCreated { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

        public int UserSign { get; set; }

    }
}
