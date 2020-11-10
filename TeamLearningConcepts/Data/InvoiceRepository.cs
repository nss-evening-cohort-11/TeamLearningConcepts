using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using TeamLearningConcepts.Models;
using Dapper;

namespace TeamLearningConcepts.Data
{
    public class InvoiceRepository
    {
        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True";

        // methods
        // GET ALL METHOD
        public List<Invoice> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var query = "select * from Invoice";

            var invoice = db.Query<Invoice>(query);

            return invoice.ToList();
        }

        // GET SINGLE METHOD
        public Invoice GetById(int invoiceId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Invoice
                          where InvoiceId = @id";

            var parameters = new { id = invoiceId };

            var invoice = db.QueryFirstOrDefault<Invoice>(query, parameters);

            return invoice;
        }

        public Invoice Complete(int invoiceId, int paymentTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"UPDATE [dbo].[Invoice]
                             SET [PaymentTypeId] = @ptid
                                ,[isCompleted] = 1
                          OUTPUT inserted.*
                           WHERE invoiceId = @id";

            var parameters = new { id = invoiceId, ptid = paymentTypeId };

            var updatedInvoice = db.QueryFirstOrDefault<Invoice>(query, parameters);

            return updatedInvoice;
        }
    }
}
