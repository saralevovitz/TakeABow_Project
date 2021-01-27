﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TakeABowApi.Dal;
using TakeABowApi.Common;
using TakeABowApi.Controllers;


namespace TakeABowApi.Logic
{
    public class Logic
    {
        public saveInDataBase save = new saveInDataBase();
        public getFromDataBase get = new getFromDataBase();



        /*Users*/

        // public Dal.User GetUser(int userId)

        public List<Common.User> TopUsers(int num)
        {
            List<Dal.User> allUsers = new getFromDataBase().GetUsers();
            allUsers = allUsers.OrderByDescending(u => u.Feedbacks.ToList().Count(f => DateTime.Today.AddDays(-14) <= f.CreateDate)).ToList();
            return allUsers.Take(5).Select(u => Converters.ConvertToCommon.U(u)).ToList();
        }

        public List<Common.User> GetAllUsers()
        {
            List<Dal.User> allUsers = new getFromDataBase().GetUsers();
            return allUsers.Select(u => Converters.ConvertToCommon.U(u)).ToList();
        }

        public Common.User GetUser(int userId)
        {
            var user = get.GetUserById(userId);
            return  Converters.ConvertToCommon.U(user);

        }

        public Boolean UpdateUser(Common.User u)
        {
            return save.updateUser(Converters.ConvertToDal.US(u));
        }

        public Common.User FindUser(int userId)
        {
            var users = get.GetUsers();
            return  Converters.ConvertToCommon.U( users.FirstOrDefault(user => user.Id ==userId));
           
        }
      
        public bool IsUserExist(Common.User u)
        {
            var users = get.GetUsers();
            return users.Any(user => user.Email == u.Email);
        }

        public Common.User Login(int id, string pass)
        {
            var users = get.GetUsers();
            Dal.User u = users.FirstOrDefault(user => user.Id == id && user.Password == pass);
            return Converters.ConvertToCommon.U(u);
        }

        public int saveNewUser(Common.User u)
        {
            var dalUser = Converters.ConvertToDal.US(u);
            var res = save.saveNewUser(dalUser);
            return res;
        }


        public bool deleteUser(int id, string pass)
        {
            bool d=save.deleteUser(id, pass);
            return d;
        }

        /*Feedbacks*/
        public bool saveNewFeedback(Common.Feedbacks f)
        {
            return save.saveNewFeedback(Converters.ConvertToDal.Feedback(f));
        }


        public List<Common.Feedbacks> getAllFeedbackByUser(int id)
        {
            List<Dal.Feedback> allFeedback = new getFromDataBase().GetAllfeedbackByUser(id);
            return allFeedback.Select(f=> Converters.ConvertToCommon.Feedback(f)).ToList();

        }
        public List<Common.Feedbacks> GetListfeedbackByUser(int id)
        {
            List<Dal.Feedback> allFeedback = new getFromDataBase().GetListfeedbackByUser(id);
            return allFeedback.Select(f => Converters.ConvertToCommon.Feedback(f)).ToList();

        }


        
        public bool deleteFeedback(int fId)
        {
            return save.deleteFeedback(fId);
        }

        public bool readFeedback(int idFeedback, int FromUserId)
        {
            return save.readFeedback(idFeedback, FromUserId);
        }

        public List<Common.Feedbacks> getFeedbackTop(int userId)
        {
            List<Dal.Feedback> allFeedback = new getFromDataBase().getFeedbackTop(userId);
            return allFeedback.Select(f => Converters.ConvertToCommon.Feedback(f)).ToList();
           
        }
        /*Permission*/

        public bool AddPermission(Permissions p)
        { 
           
            return save.AddPermission(p);
        }


        //public string getUserToPermissions(int watchUserId)
        //{
        //    return get.getUserToPermissions(watchUserId);
        //}
        /*UsersBlocked*/

        public bool Block(Common.UsersBlocked ub)
        {
            return save.Block(Converters.ConvertToDal.UsersBlocked(ub));
        }

        

        /*BlockIP*/



    }
}