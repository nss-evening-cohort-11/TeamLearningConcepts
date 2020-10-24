using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamLearningConcepts.Models
{
    public class PaymentType
    {
        public int PaymentTypeId { get; set; }
        public string PaymentName { get; set; }
        public int AccountNumber { get; set; }
        public int UserId { get; set; }
    }
}
