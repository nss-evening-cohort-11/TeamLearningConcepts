using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLearningConcepts.Data;
using TeamLearningConcepts.Models;

namespace TeamLearningConcepts.Controllers
{
    [Route("api/invoices")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        // fields
        InvoiceRepository _repo;
        InvoiceLineItemRepository _lineItemRepository;

        // constructor
        public InvoiceController()
        {
            _repo = new InvoiceRepository();
            _lineItemRepository = new InvoiceLineItemRepository();
        }

        // methods

        // GET
        [HttpGet]
        public IActionResult GetAllInvoices()
        {
            var allInvoices = _repo.GetAll();

            return Ok(allInvoices);
        }

        [HttpGet("{id}")]
        public IActionResult GetInvoiceById(int id)
        {
            var invoice = _repo.GetById(id);

            if (invoice == null) return NotFound("No invoice with that id found.");

            return Ok(invoice);
        }

        [HttpGet("user/{userId}")]
            public IActionResult GetInvoiceByUserId(int userId)
        {
            var userInvoice = _repo.GetUserInvoice(userId);

            if (userInvoice == null) return NoContent();

            return Ok(userInvoice);

        }

        [HttpPost]
        public IActionResult CreateInvoice(UserCourse userCourse)
        {
            var invoiceId = _repo.CreateNewInvoice(userCourse.UserId);

            _lineItemRepository.CreateNewInvoiceLineItem(invoiceId, userCourse.CourseId);
            
            return Ok(invoiceId);
        }
    }
}
