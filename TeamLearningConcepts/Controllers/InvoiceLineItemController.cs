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
    [Route("api/invoiceLineItems")]
    [ApiController]
    public class InvoiceLineItemController : ControllerBase
    {
        // fields
        InvoiceLineItemRepository _repo;

        // constructor
        public InvoiceLineItemController()
        {
            _repo = new InvoiceLineItemRepository();
        }

        // methods

        // GET
        [HttpGet]
        public IActionResult GetAllInvoiceLineItems()
        {
            var allInvoiceLineItems = _repo.GetAll();

            return Ok(allInvoiceLineItems);
        }

        // Get InvoiceLineItem by InvoiceId
        [HttpGet("{id}")]
        public IActionResult GetInvoiceLineById(int id)
        {
            var invoiceLine = _repo.GetByInvoiceId(id);

            if (invoiceLine == null) return NotFound("No invoice with that id found.");

            return Ok(invoiceLine);
        }

        [HttpPost]
        public IActionResult CreateNewInvoiceLineItem(int invoiceId, int courseId)
        {
            var newInvoiceLineItem = _repo.CreateNewInvoiceLineItem(invoiceId, courseId);

            return Ok(newInvoiceLineItem);
        }
    }
}
