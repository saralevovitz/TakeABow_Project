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
                using (TakeABowDBEntities db = new TakeABowDBEntities())
               {               
                var userDb = db.Users.First(x => x.Id == u.Id);
                userDb.FirstName = u.FirstName;
                userDb.LastName = u.LastName;
                userDb.Phone = u.Phone;
                userDb.Job = u.Job;
                userDb.Password = u.Password;
                db.SaveChanges();
                return true;
               }
            }
            catch (Exception ex)
            {
                //return false;
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
                using(TakeABowDBEntities db= new TakeABowDBEntities())
                {
                    // var feedback = db.Feedbacks.Where(f1 => f1.UserBlocked.IsBlocked==false );//לעשות 2 תנאים ליצירת פידבק
                     var feedback = db.Feedbacks.Add(f);
                    db.SaveChanges();
                  return true;
                }
             
                
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



        public bool readFeedback(int  idFeedback,  int FromUserId)
        {
            try
            {
                using (TakeABowDBEntities db = new TakeABowDBEntities())
                {
                    var feedbackDb = db.Feedbacks.First(f => f.Id == idFeedback);
                    feedbackDb.IsSeen = true;
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex)
            {
                //return false;
                throw;
            }
        }


       

               /*Permission*/
        public bool AddPermission(Common.Permissions p)
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


        public bool IsAllowPermission(int time, Permissions p)
        {
            try
            {
                using (TakeABowDBEntities db = new TakeABowDBEntities())
                {
                    var p1 = db.Permissions.First(per => per.ID == p.Id);
                    p1.IsAllow = p.IsAllow;
                    p1.ExpireDate = DateTime.Today.AddDays(time);
                    db.SaveChanges();
                    return true;


                }
            }
            catch (Exception ex)
            {
                //return false;
                throw;
            }
        }


            /* UsersBlocked*/
            public bool Block(UsersBlocked ub)
            {
              try
              {
                using(TakeABowDBEntities db= new TakeABowDBEntities())
                {
                   
                    
                     var ub2 = db.UsersBlockeds.Add(ub);
                    db.UsersBlockeds.Add(ub);
                  //  db.Users.FirstOrDefault(u=>u.)
                    db.SaveChanges();
                    return true;
                   
                }
              }
               catch(Exception ex)
              {
                throw;
              }
            }

    }
}