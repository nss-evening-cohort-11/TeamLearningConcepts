using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamLearningConcepts.Models
{
    public class UserCourse
    {
        public int UserCourseId { get; set; }
        public int CourseId { get; set; }

        public int UserId { get; set; }

        public bool IsComplete { get; set; }

        public bool IsDeleted { get; set; }

    }
}
