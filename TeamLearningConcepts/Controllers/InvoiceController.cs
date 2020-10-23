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
    [Route("api/invoice")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
       // properties
       public object Id { get; private set; }

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
    }
}
