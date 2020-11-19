using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamLearningConcepts.Data;
using TeamLearningConcepts.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace TeamLearningConcepts.Controllers
{
    public abstract class FirebaseEnabledController : ControllerBase
    {
        protected string UserId => User.FindFirst(x => x.Type == "user_id").Value;
    }

    [Route("api/users")]
    [ApiController]
    public class UsersController : FirebaseEnabledController
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

        [HttpGet("{email}/authedUser")]
        public IActionResult GetAuthenticatedUser(string email)
        {
            var authenticatedUser = _repo.GetAuthedUserByEmail(email);

            return Ok(authenticatedUser);
        }

        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            _repo.Add(user);

            return Created($"/api/users/{user.UserId}", user);
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
