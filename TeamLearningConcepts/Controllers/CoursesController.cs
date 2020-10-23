using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLearningConcepts.Models;

namespace TeamLearningConcepts.Controllers
{
    [Route("api/courses")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
       [HttpGet]
       public List<Course> GetAllCourses()
        {
            var course97 = new Course { CourseId = 97, Title = "TestCourse", Price = 19.95M, PhotoUrl = "test.url.com", Description = "Test Course Description 1", CourseTypeId = 197 };
            var course98 = new Course { CourseId = 98, Title = "TestCourse", Price = 19.95M, PhotoUrl = "test.url.com", Description = "Test Course Description 1", CourseTypeId = 198 };
            var course99 = new Course { CourseId = 99, Title = "TestCourse", Price = 19.95M, PhotoUrl = "test.url.com", Description = "Test Course Description 1", CourseTypeId = 199 };

            return new List<Course> { course97, course98, course99 };
        }
    }
}
