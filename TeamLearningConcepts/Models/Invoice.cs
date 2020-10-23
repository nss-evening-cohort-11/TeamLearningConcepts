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
        public decimal InvoiceTotal { get; set; }
        public bool IsCompleted { get; set; } 
    }
}
