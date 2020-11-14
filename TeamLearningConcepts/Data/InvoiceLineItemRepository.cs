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

        // GET BY INVOICE ID METHOD
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

        public void DeleteLineItem()
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"Delete from InvoiceLineItem
                        Where InvoiceId = @invoice AND CourseId = @course";


        }
    }
}
