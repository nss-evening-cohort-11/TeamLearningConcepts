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

            try
            {
                var users = db.Query<User>("select * from [User]");

                return users.ToList();

                //    var users = db.Query<User>("SELECT * FROM [User]");

                //return users.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

            internal User GetUserById(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                          FROM [User]
                          WHERE UserId = @uid";

            var parameters = new { uid = userId };

            var user = db.QueryFirstOrDefault<User>(query, parameters);

            return user;
        }


        internal User GetAuthedUserByEmail(string email)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                          FROM [User]
                          WHERE email = @userEmail";

            var parameters = new { userEmail = email };

            var authedUser = db.QueryFirstOrDefault<User>(query, parameters);

            return authedUser;
        }


        public void Add(User userToAdd)
        {
            using var db = new SqlConnection(_connectionString);

           
            var sql = @"INSERT INTO [dbo].[User]
                               ([FirstName]
                               ,[LastName]
                               ,[UserName]
                               ,[PhotoUrl]
                               ,[Email])

                               Output inserted.userid
                        VALUES
                               (@firstName,@lastName,@username,@photoUrl, @email)";

            var parameters = new { firstName = userToAdd.FirstName, lastName = userToAdd.LastName, username = userToAdd.Username, photoUrl = userToAdd.PhotoUrl, email = userToAdd.Email };

            var newId = db.ExecuteScalar<int>(sql, parameters);

            userToAdd.UserId = newId;
        }

        internal void Remove(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[User]
                           SET [IsDeleted] = 1
                          output inserted.*
                          WHERE UserId = @id";


            db.Execute(sql, new { id = userId });
        }
    }
}
