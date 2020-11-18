using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamLearningConcepts.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public int PaymentTypeId { get; set; }
        public int UserId { get; set; }
        public DateTime InvoiceDate { get; set; }
        public DateTime DateCompleted { get; set; }
        public decimal InvoiceTotal { get; set; }
        public decimal Subtotal { get; set; }
        public decimal Taxes { get; set; }
        public bool IsCompleted { get; set; } 
    }
}
