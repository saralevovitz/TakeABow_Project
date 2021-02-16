using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Common
{
    public class UsersBlocked
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BlockedUserId { get; set; }
        public bool IsBlocked { get; set; }
        public DateTime CreatedDate { get; set; }

        public UsersBlocked()
        {

        }
        public UsersBlocked(int id, int userId, int blockedUserId, bool isBlocked, DateTime createdDate)
        {
            this.Id = id;
            this.UserId = userId;
            this.BlockedUserId = blockedUserId;
            this.IsBlocked = isBlocked;
            this.CreatedDate = createdDate;
           
        }

    }
}