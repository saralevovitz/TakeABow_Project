using System;
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



        public Common.User GetUser(int userId)
        {
            var user = get.GetUserById(userId);
            return  user;

        }
      //  public User FindUser(User u)

        public Common.User FindUser(int userId )
        {
            var users = get.GetUsers();
            return  Converters.ConvertToCommon.U( users.FirstOrDefault(user => user.Id ==userId));
           
        }
        public bool UpdateUser(User u)
        {
            return save.updateUser(u);
        }
        public bool IsUserExist(User u)
        {
            var users = get.GetUsers();
            return users.Any(user => user.Email == u.Email);
        }

        public User Login(int id, string pass)
        {
            var users = get.GetUsers();
            return users.FirstOrDefault(user => user.Id == id && user.Password == pass);

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
        public bool saveNewFeedback(Feedbacks f)
        {
            return save.saveNewFeedback(f);
        }

        public List<Feedbacks> GetAllFeedbackByUser(int id)
        {
            return get.GetAllfeedbackByUser(id);
        }

        public bool deleteFeedback(int fId)
        {
            return save.deleteFeedback(fId);
        }

        public IOrderedEnumerable<KeyValuePair<int, List<Feedbacks>>> getTopFeedbacks()
        {
            return get.GetTopFeedbacks();
        }
        /*Permission*/

        public bool AddPermission(Permissions p)
        {
            return save.AddPermission(p);
        }

        /*UsersBlocked*/

        public bool Block(UsersBlocked ub)
        {
            return save.Block(ub);
        }

        public List<Common.User> TopUsers(int num)
        {
           List<Dal.User> allUsers=  new getFromDataBase().GetUsers();
           allUsers=  allUsers.OrderByDescending(u => u.Feedbacks.ToList().Count(f => DateTime.Today.AddDays(-14) <= f.CreateDate)).ToList();
            return allUsers.Take(5).Select(u => Converters.ConvertToCommon.U(u)).ToList();
        }

        /*BlockIP*/



    }
}