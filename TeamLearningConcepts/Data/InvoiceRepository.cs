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
        // fields
        static List<Invoice> _invoice = new List<Invoice>();

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
    }
}
