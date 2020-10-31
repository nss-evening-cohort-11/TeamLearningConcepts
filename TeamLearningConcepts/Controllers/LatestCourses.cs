using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLearningConcepts.Models;
using TeamLearningConcepts.Data;

namespace TeamLearningConcepts.Controllers
{
    [Route("api/latestcourses")]
    [ApiController]
    public class LatestCoursesController : ControllerBase
    {

        CourseRepository _repo;



        public LatestCoursesController()
        {
            _repo = new CourseRepository();
        }



       [HttpGet]
       public IActionResult GetLatestCourses()
        {
            var latestCourses = _repo.GetLatestCourses();

            return Ok(latestCourses);
        }
        
    }
}

