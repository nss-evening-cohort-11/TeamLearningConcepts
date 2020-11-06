using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamLearningConcepts.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Dapper;


namespace TeamLearningConcepts.Data
{
    public class PaymentTypeRepository
    {
        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True;";

public List <PaymentType> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            
            var paymentTypes = db.Query<PaymentType>("select * from paymentType");
            
            return paymentTypes.ToList();

        }

        public PaymentType GetById(int paymentTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                        from PaymentType
                        where PaymentTypeId = @pid";
            var parameters = new { pid = paymentTypeId };

            var paymentType = db.QueryFirstOrDefault<PaymentType>(query, parameters);

            return paymentType;

        }

        public List<PaymentType> GetByUserId(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                        from PaymentType
                        where UserId = @uid";
            var parameters = new { uid = userId };

            var paymentTypes = db.Query<PaymentType>(query, parameters);

            return paymentTypes.ToList();
        }

        public void Remove(int paymentTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[PaymentType]
                      SET [IsDeleted] = 1
                        output inserted.*
                        WHERE PaymentTypeId = @id";


            db.Execute(sql, new { id = paymentTypeId });
        }






           }
}
