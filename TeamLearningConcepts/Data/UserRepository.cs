using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamLearningConcepts.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Runtime.InteropServices.ComTypes;

namespace TeamLearningConcepts.Data
{
    public class UserRepository
    {
        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True;";

        public List<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>("select * from [user]");

            return users.ToList();
        }

        internal User GetUserById(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from [user]
                          where UserId = @uid";

            var parameters = new { uid = userId };

            var user = db.QueryFirstOrDefault<User>(query, parameters);

            return user;
        }
    }
}
