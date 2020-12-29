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
                Phone = u.Phone,
                Id = u.Id,
                Email=u.Email
            };
        }
    }
}