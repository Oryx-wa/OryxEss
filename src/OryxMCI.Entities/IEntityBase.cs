﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxMCI.Entities
{
    public interface IEntityBase
    {
        
        DateTime CreateDate { get; set; }
        DateTime UpdateDate { get; set; }
        int UserSign { get; set; }
    }
}