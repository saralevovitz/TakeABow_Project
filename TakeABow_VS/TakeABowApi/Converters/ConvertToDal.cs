using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Converters
{
    public static class ConvertToDal
    {
        public static Dal.User User(Common.User u)
        {
            return new Dal.User
            {
                Id = u.Id,
                FirstName=u.FirstName,
                LastName=u.LastName,
                Phone = u.Phone,
                Email =u.Email,
                Job=u.Job,
                //Gender= u.Gender,
                Create_Date = u.Create_Date,
                Password=u.Password
            };
        }
    }
}