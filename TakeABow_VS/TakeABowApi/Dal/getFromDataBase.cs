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
        private Dal.TakeABowDBEntities data = new TakeABowDBEntities();
        //static string connectionString = WebConfigurationManager.AppSettings["TakeABowDB"];
        private IOrderedEnumerable<KeyValuePair<int, List<Feedbacks>>> feedbacks;

        /*User*/
        public  List<User> GetUsers()
        {
            try
            {
                var c = WebConfigurationManager.AppSettings["TakeABowDB"];
                List<User> users = new List<User>();
                users = data.Users.Where(u => u.Is_Deleted == false).ToList();
                return users;
            }
            catch (Exception ex)
            {
                return new List<User>();
                throw;
            }
        }


        /*
        
        public static CourierCompanyEntities db = new CourierCompanyEntities();

        public static List<MadeShipments> GetMyShipment(int customerId)
        {
            var MS = db.MadeShipments.Where(x => x.CustomerId == customerId).ToList();
            return MS;‏
        }
                          
             
        */

        /*Feedback*/

        public List<Feedback> GetAllfeedbackByUser(int id)
        {

            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks= db.Feedbacks.Include(f=>f.User).Include(f=>f.User1).Where(f => f.ToUserId == id && f.IsDeleted== false).ToList();
                return allFeedbacks;
            }
          
        }

        public List<Feedback> GetListfeedbackByUser(int id)
        {

            using (TakeABowDBEntities db = new TakeABowDBEntities())
            {
                List<Feedback> allFeedbacks = new List<Feedback>();
                allFeedbacks = db.Feedbacks.Include(f => f.User).Include(f => f.User1).Where(f => f.FromUserId == id).ToList();
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

        //מיותר???
        //public IOrderedEnumerable<KeyValuePair<int, List<Dal.Feedback>>> GetTopFeedbacks()
        //{
        //    try
        //    {
        //        var c = WebConfigurationManager.AppSettings["TakeABowDB"];
        //        DateTime twoWeeksAgo = DateTime.Today.Subtract(TimeSpan.FromDays(14));
        //        return null ;

        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //        throw;
        //    }
        //}

        public User GetUserById(int userId)
        {
            using(TakeABowDBEntities db = new TakeABowDBEntities()) 
            {
                return db.Users.FirstOrDefault(u => u.Id == userId);
            }
          
            
        }

        //public string getUserToPermissions(int watchUserId)
        //{
        //    using (TakeABowDBEntities db = new TakeABowDBEntities())
        //    {
        //       var name= db.Users.FirstOrDefault(u => u.Id == watchUserId);
        //        return name;
        //    }
        //}


    }
}