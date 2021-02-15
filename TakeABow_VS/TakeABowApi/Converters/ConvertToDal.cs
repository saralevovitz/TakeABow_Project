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
                Is_Deleted = u.Is_Deleted,
                Create_Date = u.Create_Date

            };
        }


        public static Dal.Feedback Feedback(Common.Feedbacks f)
        {
            return new Dal.Feedback
            {
                Id = f.Id,
                FromUserId = f.FromUserId,
                ToUserId = f.ToUserId,
                Feedback1 = f.Feedback,
                IsAnonymous = f.IsAnonymous,
                IsSeen = f.IsSeen,
                IsDeleted = f.IsDeleted,
                CreateDate = f.CreateDate
            };
        }


        public static Dal.Permission Permissions(Common.Permissions p)
        {
            return new Dal.Permission
            {
                ID = p.Id, 
                UserId = p.UserId,
                WatchUserId = p.WatchUserId,
                CreateDate = p.CreateDate,
                IsAllow = p.IsAllow,
                ExpireDate = p.ExpireDate

            };
        }

        public static Dal.UsersBlocked UsersBlocked(Common.UsersBlocked ub)
        {
            return new Dal.UsersBlocked
            {
                ID = ub.Id,
                UserId = ub.UserId,
                BlockedUserId = ub.BlockedUserId,
                IsBlocked = ub.IsBlocked,
                CreatedDate = ub.CreatedDate
            };
        }

        public static Dal.BlockIP BlockIP(Common.BlockIP bi)
        {
            return new Dal.BlockIP
            {
                ipAddress= bi.IPAddress,
                blockTime= bi.blockTime
            };
        }
    }
}