using System;
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
        int num_user_id = 1000;

        TakeABowApi.Logic.Logic logic = new TakeABowApi.Logic.Logic();

        [HttpGet]
        [Route("api/user/test")]
        public bool Get()
        {
            return true;
        }

        [HttpPost]
        [Route("api/user/createUser")]
        public bool CreateUsert(Common.User user)
        {
            User u = new User(user);
            bool isExist = logic.IsUserExist(u);
            if (isExist)
            {
                return false;
            }
            bool res = logic.saveNewUser(u);
            return res;
        }

        [HttpPost]
        [Route("api/user/updateUser")]
        public bool POST(User u)
        {
            
            User user = logic.FindUser(u);
            if (user==null)
                return false;
            if (logic.UpdateUser(u))
                return true;
            return false;
        }

        [HttpGet]
        [Route("api/user/login")]
        public int login(int id, string password)
         {
            User u = logic.Login(id, password);
            if(u == null)
            {
                return 0;
            }

            return u.Id;
        }      
       
        }
    
    }



