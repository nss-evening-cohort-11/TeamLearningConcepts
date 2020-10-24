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

    public class CourseRepository
    {


        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True;";



        public List<Course> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var courses = db.Query<Course>("SELECT * FROM Course");

            return courses.ToList();
        }



        public Course GetById(int courseId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                        FROM Course
                        WHERE CourseId = @cid";

            var parameters = new { cid = courseId };

            var course = db.QueryFirstOrDefault<Course>(query, parameters);

            return course;
        }


    }
}
