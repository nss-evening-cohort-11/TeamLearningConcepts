using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLearningConcepts.Data;
using TeamLearningConcepts.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TeamLearningConcepts.Controllers
{
    [Route("api/userCourses")]
    [ApiController]
    public class UserCourseController : ControllerBase
    {
        UserCourseRepository _repo;

        public UserCourseController()
        {
            _repo = new UserCourseRepository();
        }
        [HttpGet]
        public IActionResult GetAllUserCourses()
        {
            var allUserCourses = _repo.GetAll();

            return Ok(allUserCourses);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var userCourse = _repo.GetById(id);

            if (userCourse == null) return NotFound("No user course found");

            return Ok(userCourse);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserCourse(int id)
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


