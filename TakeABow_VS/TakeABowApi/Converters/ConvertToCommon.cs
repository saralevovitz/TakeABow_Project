﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Converters
{
    public static class ConvertToCommon
    {
        public static Common.User U(Dal.User u)
        {
            return new Common.User
            {
                Id = u.Id,
                Password = u.Password‏,
                FirstName = u.FirstName,
                LastName = u.LastName,
                Phone = u.Phone,
                Email = u.Email,
                Job = u.Job,
                Is_Deleted= u.Is_Deleted,
                Create_Date = u.Create_Date
            };
           
        }

        public static Common.Feedbacks Feedback(Dal.Feedback f)
        {
            return new Common.Feedbacks
            {
                Id = f.Id,
                FromUserId = f.FromUserId,
                ToUserId = f.ToUserId,
                Feedback = f.Feedback1,
                IsAnonymous = f.IsAnonymous,
                IsSeen = f.IsSeen,
                IsDeleted = f.IsDeleted,
                CreateDate = f.CreateDate,
                FromUserFullName = f.User.FirstName + " " + f.User.LastName,
                ToUserFullName= f.User.FirstName+" "+f.User.LastName
            };
        }


        public static Common.Permissions Permissions(Dal.Permission p)
        {
            return new Common.Permissions
            {
                Id = p.ID, //TODO
                UserId= p.UserId,
                WatchUserId= p.WatchUserId,
                CreateDate= p.CreateDate,
                IsAllow= p.IsAllow,
                ExpireDate= p.ExpireDate,
                FromUserFullName=p.User.FirstName+" "+p.User.LastName,
                ToUserFullName = p.User.FirstName + " " + p.User.LastName
             
            };
        }

        public static Common.UsersBlocked UsersBlocked(Dal.UsersBlocked ub)
        {
            return new Common.UsersBlocked
            {
               Id= ub.ID,//TODO
               UserId= ub.UserId,
               BlockedUserId= ub.BlockedUserId,
               IsBlocked= ub.IsBlocked,
               CreatedDate=ub.CreatedDate
               
            };
        }

        public static Common.BlockIP BlockIP(Dal.BlockIP bi)
        {
            return new Common.BlockIP
            {
              IPAddress=bi.ipAddress,
              blockTime= bi.blockTime
             /*Create_Date = bi.Create_Date,
              Password = bi.Password*/
            };
        }
    }
}