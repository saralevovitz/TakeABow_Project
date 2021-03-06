﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection.Emit;
using System.Web.Http;
using TakeABowApi.Common;


namespace TakeABowApi.Controllers
{
    public class UserController : ApiController
    {
       // לבדוק אם מיותר ןלמחוק
        int num_user_id = 1000;

        TakeABowApi.Logic.Logic logic = new TakeABowApi.Logic.Logic();


        [HttpGet]
        [Route("api/user/test")]
        public bool Get()
        {

           // new Logic.MailManager().SendEmail("saralev2000@gmail.com", "try", "hey");
            return true;
        }

        [HttpGet]
        [Route("api/user/getAllUsers/{userId}")]//שליפת כל המשתמשים חוץ מהמשתמש המחובר
        public List<Common.User> GetAllUsers(int userId)
        {
            return logic.GetAllUsers(userId);
        }

        [HttpGet]
        [Route("api/user/getTopUsers/{num}")]
        public List<Common.User> GetTopUsers(int num)
        {
            return logic.TopUsers(num);
        }


        [HttpPost]
        [Route("api/user/createUser")]//יצירת משתמש חדש
        public int CreateUsert(Common.User user)
        {
            User u = new User(user);
            bool isExist = logic.IsUserExist(u);
            
            if (isExist)
            {
                return 0;
            }

            u.Id=logic.saveNewUser(u);
            return u.Id;
        }

        [HttpPost]
        [Route("api/user/updateUser")]

        public bool updateUser(User u)
        {
            return logic.UpdateUser(u);
        }

        [HttpPost]
        [Route("api/user/findUser")]
        //  findUser?
        public bool findUser(Common.User u)
        {      
            User user = logic.FindUser(u.Id);
            if (user==null)
                return false;
            if (logic.UpdateUser(u))
                return true;
            return false;  
        }

        [HttpPost]
        [Route("api/user/login")]
        public int login(User userLogin)
         {
            User u = logic.Login(userLogin.Id, userLogin.Password);
            if(u == null)
            {
                return 0;
            }
         
            return u.Id;
        }

        [Route("api/user/GetUserById/{userId}"), HttpGet]
        public User GetUserById(int userId)
        {
            return logic.GetUser(userId);
        }     

    }
    
    }



