using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamLearningConcepts.Data;
using TeamLearningConcepts.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TeamLearningConcepts.Controllers
{
    [Route("api/courseTypes")]
    [ApiController]
    public class CourseTypesController : ControllerBase
    {
        CourseTypeRepository _repo;

        public CourseTypesController()
        {
            _repo = new CourseTypeRepository();
        }

        [HttpGet]
        public IActionResult GetAllCourseTypes()
        {
            var allCourseTypes = _repo.GetAll();

            return Ok(allCourseTypes);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleCourseType(int id)
        {
            var singleCourseType = _repo.GetCourseTypeById(id);

            if (singleCourseType == null)
            {
                return NotFound("This course type was not found in the database.");
            }

            return Ok(singleCourseType);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCourseType(int id)
        {
            if (_repo.GetCourseTypeById(id) == null)
            {
                return NotFound();
            }

            _repo.Remove(id);

            return Ok();
        }

    }
}
