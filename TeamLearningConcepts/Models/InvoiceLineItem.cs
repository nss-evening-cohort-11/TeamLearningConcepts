using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamLearningConcepts.Models
{
    public class InvoiceLineItem
    {
        public int InvoiceLineItemId { get; }
        public int CourseId { get; set; }
        public int InvoiceId { get; set; }
        public int Quantity { get; set; }
    }
}
