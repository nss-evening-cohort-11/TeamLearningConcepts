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

        public List<Course> GetAllByCourseTypeId(int courseTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT * 
                        FROM Course
                        WHERE CourseTypeId = @ctid";

            var parameters = new { ctid = courseTypeId };

            var coursesByType = db.Query<Course>(query, parameters);

            return coursesByType.ToList();
        }

        public List<Course> GetFirstThreeByCourseTypeId(int courseTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT TOP 3 * 
                        FROM Course
                        WHERE CourseTypeId = @ctid";

            var parameters = new { ctid = courseTypeId };

            var firstThreeCoursesByType = db.Query<Course>(query, parameters);

            return firstThreeCoursesByType.ToList();
        }

        public List<Course> GetLatestCourses()
        {
            using var db = new SqlConnection(_connectionString);

            var courses = db.Query<Course>("SELECT TOP 5 * FROM Course ORDER BY CourseId DESC");

            return courses.ToList();
        }

        public int GetQuantityByCourseTypeId(int courseTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT COUNT(*) 
                        FROM Course
                        WHERE CourseTypeId = @ctid";

            var parameters = new { ctid = courseTypeId };

            var numberOfCoursesByType = db.QuerySingle<int>(query, parameters);

            return numberOfCoursesByType;
        }

        public List<Course> GetSearchResults(string searchValue)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Course
                          Where Title Like '%' + @searchVal + '%'";
            var parameters = new { searchVal = searchValue };

            var filteredCourses = db.Query<Course>(query, parameters);

            return filteredCourses.ToList();
        }


        internal void Remove(int courseId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[Course]
                            SET [IsDeleted] = 1
                                output inserted.*
                                WHERE courseId = @id";

            db.Execute(sql, new { id = courseId });
        }
    }
}
