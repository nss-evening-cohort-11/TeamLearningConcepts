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

            if (coursesByType == null) return NotFound("No courses with that courseTypeId were found. Please Try again.");

            return Ok(coursesByType);
        }

        [HttpGet("firstThreeByCourseTypeId/{id}")]
        public IActionResult GetFirstThreeCoursesByCourseTypeId(int id)
        {
            var threeCoursesByType = _repo.GetFirstThreeByCourseTypeId(id);

            if (threeCoursesByType == null) return NotFound("No courses with that courseTypeId were found. Please Try again.");

            return Ok(threeCoursesByType);
        }

        [HttpGet("numberByCourseTypeId/{id}")]
        public IActionResult GetNumberOfCoursesByCourseTypeId(int id)
        {
            var numberOfCoursesByType = _repo.GetQuantityByCourseTypeId(id);

            if (numberOfCoursesByType == 0) return NotFound("No courses with that courseTypeId were found. Please Try again.");

            return Ok(numberOfCoursesByType);
        }

        [HttpGet("search/{searchValue}")]
        public IActionResult SearchResults(string searchValue)
        {
            var searchResults = _repo.GetSearchResults(searchValue);

            if (searchResults == null) return NotFound("No courses found!");

            return Ok(searchResults);
        }

        [HttpGet("latestCourses")]
        public IActionResult GetLatestCourses()
        {
            var latestCourses = _repo.GetLatestCourses();

            return Ok(latestCourses);
        }

        [HttpGet("singleCourseView/{courseId}")]

        public IActionResult GetSingleCourseById(int courseId)
            
        {
            var singleCourseById = _repo.GetSingleCourseById(courseId);

            if (singleCourseById == null) return NotFound("No course with that Id was found. Please Try again.");

            return Ok(singleCourseById);
        }

        [HttpGet("invoice/{id}")]
        public IActionResult GetCourseByInvoiceId(int id)
        {
            var courses = _repo.GetCoursesByInvoiceId(id);

            if (courses == null) return NotFound("No courses.");

            return Ok(courses);
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
