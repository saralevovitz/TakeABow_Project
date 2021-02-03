using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Common
{
    public class Permissions
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int WatchUser‏Id { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsAllow { get; set; }
        public DateTime ExpireDate { get; set; }

        public string FromUserFullName { get; set; }
        public string ToUserFullName { get; set; }

        public Permissions()
        {
                
        }


        public Permissions(int id, int userId, int watchUser‏Id,  bool isAllow , DateTime expireDate)
        {
            this.Id = id;
            this.UserId = userId;
            this.WatchUserId = watchUserId;
            this.CreateDate = DateTime.Now;
            this.IsAllow = isAllow;
            this.ExpireDate = expireDate;

        }
    }



   
}