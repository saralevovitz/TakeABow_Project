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
                    if (u.Is_Deleted == true)
                        userDb.Is_Deleted = true;
                    else
                    {
                        userDb.FirstName = u.FirstName;
                        userDb.LastName = u.LastName;
                        userDb.Phone = u.Phone;
                        userDb.Job = u.Job;
                        userDb.Is_Deleted = u.Is_Deleted;
                        userDb.Password = u.Password;
                    }
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
        public  bool saveNewFeedback(int sendTo, Feedback f)
        {
            try
            {
                using(TakeABowDBEntities db= new TakeABowDBEntities())
                {
                    var user = db.Users.FirstOrDefault(f1 => f1.Id == sendTo);
                    // var feedback = db.Feedbacks.Where(f1 => f1.UserBlocked.IsBlocked==false );//לעשות 2 תנאים ליצירת פידבק
                    if (user==null)//בדיקה אם המייל קיים משהו עם כזה מייל או ידי
                    {
                        return false;
                    }
                    else//אם קיים
                    {
                        
                            f.ToUserId = user.Id;//מוסיף באוביקט פידבק למי שלח
                            db.Feedbacks.Add(f); 
                            db.SaveChanges();
                             return true;
                       
                       
                    }
                   
                }
             
                
            }
            catch (Exception ex)
            {
                throw;
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
        { using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                try
                {
                     if(db.Permissions.FirstOrDefault(per=>per.UserId==p.UserId && per.WatchUserId==p.WatchUserId)==null)//בדיקה אם שלח בקשת צפיה למשתמש הזה
                     {
                       data.Permissions.Add(Converters.ConvertToDal.Permissions(p));
                       data.SaveChanges();
                       return true;
                     }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception ex)
                {
                     throw;
                    //return false;
                }
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


        //public bool Block(UsersBlocked ub)//חסימת משתמש
        //{
        //  try
        //  {
        //    using (TakeABowDBEntities db = new TakeABowDBEntities())
        //    {

        //        if (db.UsersBlockeds.First(u => u.UserId == ub.UserId && u.BlockedUserId == ub.BlockedUserId)==null)//בדיקה אם המשתמש נחסם בעבר ע"י החוסם 
        //        {
        //            db.UsersBlockeds.Add(ub);//אם לא קיים אז תוסיף
        //            db.SaveChanges();
        //            return true;
        //        }
        //        else
        //        {//אם קיים אז תשנה אותו לחסום
        //            UsersBlocked ub2 = db.UsersBlockeds.FirstOrDefault(u => u.UserId == ub.UserId && u.BlockedUserId == u.BlockedUserId);
        //            ub2.IsBlocked = true;
        //             db.SaveChanges();
        //             return true;
        //        }
        //        return false;
        //    }   

        //  }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }
        //}


        public bool Block(UsersBlocked ub)//חסימת משתמש
        {
            try
            {
                using (TakeABowDBEntities db = new TakeABowDBEntities())
                {
                    var user = db.UsersBlockeds.FirstOrDefault(u => u.UserId == ub.UserId && u.BlockedUserId == ub.BlockedUserId);
                   if (user!=null)
                   {
                        user.IsBlocked = !user.IsBlocked;
                        db.SaveChanges();
                        return true;
                   }
                    else
                    {
                        db.UsersBlockeds.Add(ub);
                        db.SaveChanges();
                        return true;
                    }
                  
                  
                }

            }
            catch (Exception ex)
            { 
                // return false;
                throw;
            }
        }


        public bool OpenUser(UsersBlocked ub)
        {
            try
            {
                using (TakeABowDBEntities db = new TakeABowDBEntities())
                {
                    UsersBlocked ub2 = db.UsersBlockeds.FirstOrDefault(u => u.UserId == ub.UserId && u.BlockedUserId==u.BlockedUserId);
                    ub2.IsBlocked = false;
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}