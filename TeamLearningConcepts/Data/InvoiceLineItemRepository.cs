using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using TeamLearningConcepts.Models;
using Dapper;

namespace TeamLearningConcepts.Data
{
    public class InvoiceLineItemRepository
    {
        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True";

        // methods
        // GET ALL METHOD
        public List<InvoiceLineItem> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var query = "select * from InvoiceLineItem";

            var invoiceLine = db.Query<InvoiceLineItem>(query);

            return invoiceLine.ToList();
        }

        public List<InvoiceLineItem> GetByInvoiceId(int invoiceId)
        {
            var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from InvoiceLineItem
                          where InvoiceId = @id";

            var parameters = new { id = invoiceId };

            var invoiceLine = db.Query<InvoiceLineItem>(query, parameters);

            return invoiceLine.ToList();
        }
    }
}
