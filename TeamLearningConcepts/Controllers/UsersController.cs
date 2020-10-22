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
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UserRepository _repo;

        public UsersController()
        {
            _repo = new UserRepository();
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _repo.GetAll();

            return Ok(allUsers);
        }

        [HttpGet("{id}")] 
        public IActionResult GetSingleUser(int id)
        {
            var singleUser = _repo.GetUserById(id);

            return Ok(singleUser);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            if (_repo.GetUserById(id) == null)
            {
                return NotFound();
            }

            _repo.Remove(id);

            return Ok();
        }
    }
}
