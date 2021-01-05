using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TakeABowApi.Common;
using TakeABowApi.Logic;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Configuration;

namespace TakeABowApi.Dal
{
    public  class saveInDataBase
    {
        private TakeABowDBEntities data = new TakeABowDBEntities();
        static string connectionString = WebConfigurationManager.AppSettings["TakeABowDB"];
        /*Users*/

        public static List<User> GetUsers()
        {
             return new List<User>();
        }

        public  int saveNewUser(User u)
        {
            try
            {
                data.Users.Add(u);
                data.SaveChanges();
                return u.Id;
            }
            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }

        public  bool updateUser(User u)
        {
            try
            {
                var userDb = data.Users.First(x => x.Email == u.Email);
                userDb.FirstName = u.FirstName;
                userDb.LastName = u.LastName;
                userDb.Phone = u.Phone;
                userDb.Job = u.Job;
                userDb.Password = u.Password;
                data.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
        public bool deleteUser(int id, string pass)
        {
            try
            {
                var userDb = data.Users.First(x => x.Id == id);
                userDb.Is_Deleted = true;
                data.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }
        /*Feedbacks*/
        public  bool saveNewFeedback(Feedback f)
        {
            try
            {
                data.Feedbacks.Add(f);
                data.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool deleteFeedback(int fId)
        {
                try
                {
                    var feedbackDb = data.Feedbacks.First(f => f.Id == fId);
                    feedbackDb.IsDeleted = true;
                    data.SaveChanges();
                    return true;

                }
                catch (Exception ex)
                {
                    return false;
                    throw;
                }    
        }
        /*Permission*/
        public bool AddPermission(Permissions p)
        {
            try
            {
                data.Permissions.Add(Converters.ConvertToDal.Permissions(p));
                data.SaveChanges();
                return true;

            }
            catch(Exception ex)
            {
                return false;
            }
        }


       /* UsersBlocked*/
        public bool Block(UsersBlocked ub)
        {
            try
            {
                data.UsersBlockeds.Add(ub);
                data.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

    }
}