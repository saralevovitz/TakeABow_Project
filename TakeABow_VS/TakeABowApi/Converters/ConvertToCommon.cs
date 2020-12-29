using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Converters
{
    public static class ConvertToCommon
    {
        public static Common.User User(Dal.User u)
        {
            return new Common.User
            {
                Phone = u.Phone,
                Id = u.Id,
                Email = u.Email
            };
        }
    }
}