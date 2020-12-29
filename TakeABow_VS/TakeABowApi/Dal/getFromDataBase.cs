﻿using System;
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
                var users = data.Users.Where(u => u.Is_Deleted == false).ToList();
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
        public List<Dal.Feedback> GetAllfeedbackByUser(int id)
        {
            var feedbacks = data.Feedbacks.Where(f => f.ToUserId == id).ToList();
            return feedbacks;
        }

        public IOrderedEnumerable<KeyValuePair<int, List<Dal.Feedback>>> GetTopFeedbacks()
        {
            try
            {
                var c = WebConfigurationManager.AppSettings["TakeABowDB"];
                DateTime twoWeeksAgo = DateTime.Today.Subtract(TimeSpan.FromDays(14));
                return null ;
            
            }
            catch (Exception ex)
            {
                return null;
                throw;
            }
        }
    }
}