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

        // Set isComplete to true, update PaymentType and InvoiceTotal
        public void Complete(Invoice invoice)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"
                          UPDATE [dbo].[Invoice]
                             SET [PaymentTypeId] = @ptid
                                ,[isCompleted] = 1
                          OUTPUT inserted.*
                           WHERE invoiceId = @id";

            var parameters = new { id = invoice.InvoiceId, ptid = invoice.PaymentTypeId, total = invoice.InvoiceTotal };

            db.Execute(query, parameters);
        }
        public int CreateNewInvoice(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"
                        INSERT INTO [dbo].[Invoice]
                       ([UserId]
                       ,[InvoiceDate]
                       ,[InvoiceTotal]
                       ,[PaymentTypeId]
                       ,[isCompleted]) 
                        OUTPUT Inserted.InvoiceId
                 VALUES
                       (@user
                       ,getdate()
                       ,0
                       ,0
                       ,0)";

            var parameters = new { user = userId };

            var newId = db.QuerySingle<int>(query, parameters);

            return newId;
        }

        public Invoice GetUserInvoice(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                        FROM Invoice
                        WHERE UserId = @uid AND isCompleted = 0";

            var parameters = new { uid = userId };

            var invoice = db.QueryFirstOrDefault<Invoice>(query, parameters);

            return invoice;

        }


        public List<Invoice> GetAllUserInvoices(int userId)
        {
            using var db = new SqlConnection(_connectionString);

           var query = @"SELECT *
                        FROM Invoice
                       WHERE UserId = @uid AND isCompleted = 1";

           var parameters = new { uid = userId };

            var invoices = db.Query<Invoice>(query);

           return invoices.ToList();
        }
    }
}
