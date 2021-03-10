using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TakeABowApi.Common;
using TakeABowApi.Logic;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Configuration;
using Microsoft.Ajax.Utilities;
using System.Web.UI.WebControls;
using System.Data.Entity.Core.Common.CommandTrees;
using System.Security.Authentication.ExtendedProtection;
using WebGrease.Css.Extensions;
using System.Runtime.InteropServices;
using System.Data.Entity;
namespace TakeABowApi.Dal
{
    public  class getFromDataBase
    {

        /*User*/
        public  List<User> GetUsers()
        {
            try
            {
                using(TakeABowDBEntities db= new TakeABowDBEntities())
                {
                    List<User> users = new List<User>();
                    users = db.Users.Include(f=>f.Feedbacks).Where(u => u.Is_Deleted == false ).OrderBy(u=>u.Id).ToList();
                    return users;
                }
             
            }
            catch (Exception ex)
            {
              //  return new List<User>();
                throw;
            }
        }




        public List<User> GetListUsers(int userId)
        {
            try
            {
                using (TakeABowDBEntities db = new TakeABowDBEntities())
                {
                    List<User> users = new List<User>();
                    users = db.Users.Include(f => f.Feedbacks).Where(u => u.Is_Deleted == false && u.Id!=userId).OrderBy(u => u.Id).ToList();
                    return users;
                }

            }
            catch (Exception ex)
            {
                //  return new List<User>();
                throw;
            }
        }



        /*Feedback*/

        public List<Feedback> GetAllfeedbackByUser(int id)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks= db.Feedbacks.Include(f=>f.User).Include(f=>f.User1).Where(f => f.ToUserId == id && f.IsDeleted== false).OrderByDescending(f=>f.CreateDate).ToList();
                return allFeedbacks;
            }
          
        }
        public List<Feedback> ViewAllFeedbacks(int id)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks = db.Feedbacks.Include(f => f.User).Include(f => f.User1).Where(f => f.ToUserId == id && f.IsDeleted == false).ToList();
                return allFeedbacks;
            }

        }


        
        public List<Feedback> GetListfeedbackByUser(int id)
        {

            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks = db.Feedbacks.Include(f => f.User).Include(f => f.User1).Where(f => f.FromUserId == id).OrderByDescending(f => f.CreateDate).ToList();
                return allFeedbacks;
            }

        }

        public List<Feedback> getFeedbackTop(int userId)
        {
            using(TakeABowDBEntities db= new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks = db.Feedbacks.Include(f => f.User).Include(f => f.User1).Where((f => f.ToUserId == userId && f.IsSeen== true && f.IsDeleted== false)).ToList();
                return allFeedbacks;
            }
        }
        
        public User GetUserById(int userId)
        {
            using(TakeABowDBEntities db = new TakeABowDBEntities()) 
            {
                return db.Users.FirstOrDefault(u => u.Id == userId);
            }
        }

        public List<Permission> getAllPermissions(int toPermission)
        {
            using(TakeABowDBEntities db= new TakeABowDBEntities())
            {
                List<Permission> allPermission = new List<Permission>();
                allPermission = db.Permissions.Include(f => f.User).Where(p1 => p1.UserId == toPermission && p1.IsAllow!=true).OrderByDescending(p1=> p1.CreateDate).ToList();
                return allPermission;
            }
        }

        public List<Permission> getlistInvitation(int WatchUserId)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Permission> allPermission = new List<Permission>();
                allPermission = db.Permissions.Include(f => f.User).Where(p1 => p1.WatchUserId == WatchUserId &&p1.ExpireDate>(DateTime.Now)).ToList();
                return allPermission;
            }
        }


        public int getAmountFeedbacks(int userId)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                var count = db.Feedbacks.Where(f => f.ToUserId == userId).Count(f => f.IsSeen == false);
                return count;
            }
        }


        public int getAmountViewRequests(int userId)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                var count = db.Permissions.Where(p => p.UserId == userId).Count(p => p.IsAllow == null);
                return count;
            }
        }


        public bool checkUserBlock(int myId, int userId)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                var ub = db.UsersBlockeds.FirstOrDefault(u =>u.UserId == myId && u.BlockedUserId == userId);//בודק לפי היד של הבקשה אם הוא חסום, אם חסום מחזיר אמת 
               if(ub != null && ub.IsBlocked == true)
                    return true;
                return false;
            }
        }

        internal bool? checkUserAllow(int myId, int userId)
        {
            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                var ub = db.Permissions.FirstOrDefault(u => u.UserId == userId && u.WatchUserId == myId);//בודק לפי היד של הבקשה אם הוא חסום, אם חסום מחזיר אמת 

                if (ub == null)
                    return null;
                else return false;
            }
        }
    }
}