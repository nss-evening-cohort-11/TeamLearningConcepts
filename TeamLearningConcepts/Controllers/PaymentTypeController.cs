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
    [Route("api/paymentTypes")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        PaymentTypeRepository _repo;

        public PaymentTypeController()
        {
            _repo = new PaymentTypeRepository();
        }
        [HttpGet]
        public IActionResult GetAllPaymentTypes()
        {
            var allPaymentTypes = _repo.GetAll();

            return Ok(allPaymentTypes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var paymentType = _repo.GetById(id);

            if (paymentType == null) return NotFound("No payment type");

            return Ok(paymentType);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePaymentType(int id)
        {
            if (_repo.GetById(id) == null)
            {
                return NotFound();
            }
            _repo.Delete(id);

            return Ok();

        }
    }
}

