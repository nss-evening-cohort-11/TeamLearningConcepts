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
    [Route("api/courses")]
    [ApiController]
    public class CoursesController : ControllerBase
    {

        CourseRepository _repo;



        public CoursesController()
        {
            _repo = new CourseRepository();
        }



       [HttpGet]
       public IActionResult GetAllCourses()
        {
            var allCourses = _repo.GetAll();

            return Ok(allCourses);
        }



        [HttpGet("{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = _repo.GetById(id);

            if (course == null) return NotFound("No course with that Id was found. Please Try again.");

            return Ok(course);
        }

        [HttpGet("allByCourseTypeId/{id}")]
        public IActionResult GetAllCoursesByCourseTypeId(int id)
        {
            var coursesByType = _repo.GetAllByCourseTypeId(id);

            if (coursesByType == null) return NotFound("No courses with that courseTypeId ware found. Please Try again.");

            return Ok(coursesByType);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCourse(int id)
        {
            if (_repo.GetById(id) == null)
            {
                return NotFound();
            }

            _repo.Remove(id);

            return Ok();
        }
    }
}
