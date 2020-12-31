using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Converters
{
    public static class ConvertToDal
    {
        public static Dal.User US(Common.User u)
        {
            return new Dal.User
            {
                Id = u.Id,
                Password = u.Password‏,
                FirstName = u.FirstName,
                LastName = u.LastName,
                Phone = u.Phone,
                Email = u.Email,
                Job = u.Job,
                //Gender= u.Gender,
                Is_Blocked = u.Is_Blocked,
                Blocked_Date = u.Blocked_Date,
                Is_Deleted = u.Is_Deleted,
                Create_Date = u.Create_Date

            };
        }

    }
}