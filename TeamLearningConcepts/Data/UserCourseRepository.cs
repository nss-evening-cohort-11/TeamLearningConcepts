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
    public class UserCourseRepository
    {

        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True;";

        public List<UserCourse> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var userCourses = db.Query<UserCourse>("select * from userCourse");

            return userCourses.ToList();

        }
        public UserCourse GetById(int userCourseId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                        from UserCourse
                        where UserCourseId = @uid";
            var parameters = new { uid = userCourseId };

            var userCourse = db.QueryFirstOrDefault<UserCourse>(query, parameters);

            return userCourse;

        }
        public void Remove(int userCourseId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[UserCourse]
                       SET [IsDeleted] = 1
                          output inserted.*
                        WHERE UserCourseId = @id";


            db.Execute(sql, new { id = userCourseId });
        }






    }
}

