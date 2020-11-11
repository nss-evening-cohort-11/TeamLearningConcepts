﻿using System;
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

        // constructor
        public InvoiceController()
        {
            _repo = new InvoiceRepository();
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

        [HttpPut("complete")]
        public IActionResult CompleteInvoice(Invoice invoice)
        {
            if (_repo.GetById(invoice.InvoiceId) == null)
            {
                return NotFound("No invoice with that id found.");
            }

            _repo.Complete(invoice);

            return Ok();
        }
    }
}
