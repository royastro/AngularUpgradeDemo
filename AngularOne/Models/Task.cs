using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularOne.Models
{
    public class Task
    {
        public string Id { get; set; }
        
        public string ProjectName { get; set; }
        public string TaskName { get; set; }        

        public string Status { get; set; }  
        
        public string Notes { get; set; }        
        
    }
}