using Dapper;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using TeamLearningConcepts.Models;

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

        // GET BY INVOICE ID METHOD
        public List<InvoiceLineItem> GetByInvoiceId(int invoiceId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from InvoiceLineItem
                          where InvoiceId = @id";

            var parameters = new { id = invoiceId };

            var invoiceLine = db.Query<InvoiceLineItem>(query, parameters);

            return invoiceLine.ToList();
        }

        // GET BY INVOICEID AND COURSEID
        public InvoiceLineItem GetByInvoiceAndCourse(int invoiceId, int courseId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select * 
                          from InvoiceLineItem
                          Where InvoiceId = @invoice AND CourseId = @course";

            var parameters = new { invoice = invoiceId, course = courseId };

            var invoiceLine = db.QueryFirstOrDefault<InvoiceLineItem>(query, parameters);

            return invoiceLine;
        } 


        public int CreateNewInvoiceLineItem(int invoiceId, int courseId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"
                        alter table InvoiceLineItem
                        nocheck constraint FK_InvoiceLineItem_Course, FK_InvoiceLineItem_Invoice

                        INSERT INTO[dbo].[InvoiceLineItem]
                        ([CourseId]
                        ,[InvoiceId]
                        ,[Quantity])
                        OUTPUT Inserted.InvoiceLineItemId
            VALUES
                       (@course
                       ,@invoice
                       ,'1')

                        alter table InvoiceLineItem
                        check constraint FK_InvoiceLineItem_Course, FK_InvoiceLineItem_Invoice";

            var parameters = new { course = courseId, invoice = invoiceId };

            var newLineItem = db.QuerySingle<int>(query, parameters);

            return newLineItem;
        }

        public void DeleteLineItem(int invoiceId, int courseId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"Delete from InvoiceLineItem
                        Where InvoiceId = @invoice AND CourseId = @course";

            var parameters = new { invoice = invoiceId, course = courseId };

            db.Execute(query, parameters);
        }
    }
}
