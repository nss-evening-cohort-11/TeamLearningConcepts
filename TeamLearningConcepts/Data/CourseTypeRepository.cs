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
    public class CourseTypeRepository
    {
        const string _connectionString = "Server=localhost;Database=TLC;Trusted_Connection=True;";

        public List<CourseType> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var courseTypes = db.Query<CourseType>("SELECT * FROM CourseType");

            return courseTypes.ToList();
        }

        internal CourseType GetCourseTypeById(int courseTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"SELECT *
                          FROM CourseType
                          WHERE CourseTypeId = @uid";

            var parameters = new { uid = courseTypeId };

            var courseType = db.QueryFirstOrDefault<CourseType>(query, parameters);

            return courseType;
        }

        internal void Remove(int courseTypeId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[CourseType]
                           SET [CourseTypeName] = ''
                          output inserted.*
                          WHERE CourseTypeId = @id";


            db.Execute(sql, new { id = courseTypeId });
        }
    }
}
