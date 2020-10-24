using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamLearningConcepts.Models
{
    public class Course
    {
        public int CourseId { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string PhotoUrl { get; set; }
        public string Description { get; set; }
        public int CourseTypeId { get; set; }
    }
}
