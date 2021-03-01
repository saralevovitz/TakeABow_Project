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



        /*Users*/

        // public Dal.User GetUser(int userId)
 
        ///פונקציה המחזירה את חמשת המשתמשים עם כמות הפידבקים הגבוהה ביותר בטווח זמן מסוים
        public List<Common.User> TopUsers(int num)
        {
            List<Dal.User> allUsers = new getFromDataBase().GetUsers();
            allUsers = allUsers.OrderByDescending(u => u.Feedbacks.ToList().Count(f => DateTime.Today.AddDays(-14) <= f.CreateDate)).ToList();
            return allUsers.Take(5).Select(u => Converters.ConvertToCommon.U(u)).ToList();
        }
        //פונקציה המחזירה רשימה של כל המשתמשים באפליקציה
        public List<Common.User> GetAllUsers(int userId)
        {
            List<Dal.User> allUsers = new getFromDataBase().GetListUsers(userId);
            var users = allUsers.Select(u => Converters.ConvertToCommon.U(u)).ToList();
            foreach (var u in users)
            {
                u.IsBlocked = checkUserBlock(userId, u.Id);
            }
            return users;

        }
        //פונקציה המחזירה משתמש מסוים
        public Common.User GetUser(int userId)
        {
            var user = get.GetUserById(userId);
            return  Converters.ConvertToCommon.U(user);

        }
        //פונקציה המעדכנת פרטי משתמש
        public Boolean UpdateUser(Common.User u)
        {
            return save.updateUser(Converters.ConvertToDal.US(u));
        }
        //פונקציה המשמשת למציאת משתמש מסוים במאגר
        public Common.User FindUser(int userId)
        {
            var users = get.GetUsers();
            return  Converters.ConvertToCommon.U( users.FirstOrDefault(user => user.Id ==userId));
           
        }
      //פונקציה הבודקת האם משתמש מסוים נמצא במאגר או לא
        public bool IsUserExist(Common.User u)
        {
            var users = get.GetUsers();
            return users.Any(user => user.Email == u.Email);
        }
        //פונקציית (אימות) כניסה של משתמש רשום לאפליקציה
        public Common.User Login(int id, string pass)
        {
            var users = get.GetUsers();
            Dal.User u = users.FirstOrDefault(user => user.Id == id && user.Password == pass);
            return Converters.ConvertToCommon.U(u);
        }
        //פונקציה השומרת פרטי משתמש חדש במערכת
        public int saveNewUser(Common.User u)
        {
            var dalUser = Converters.ConvertToDal.US(u);

            var res = save.saveNewUser(dalUser);
            string subject =" תודה רבה שנרשמתם ל TakeABow ";
            string message =  "השם משתמש שלך באפלקציה שלנו הוא: "+dalUser.Id.ToString();

            new MailManager().SendEmail(u.Email, subject, message);
            return res;
        }
        //פונקציה המוחקת משתמש מהמערכת
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

        public List<Common.Feedbacks> ViewAllFeedbacks(int id)
        {
            List<Dal.Feedback> allFeedback = new getFromDataBase().ViewAllFeedbacks(id);
            return allFeedback.Select(f => Converters.ConvertToCommon.Feedback(f)).ToList();

        }
        public List<Common.Feedbacks> GetListfeedbackByUser(int id)
        {
            List<Dal.Feedback> allFeedback = new getFromDataBase().GetListfeedbackByUser(id);
            return allFeedback.Select(f => Converters.ConvertToCommon.Feedback(f)).ToList();

        }

        public int amountFeedbacks(int userId)
        {
            return get.getAmountFeedbacks(userId);
        }


        public int amountViewRequests(int userId)
        {
            return get.getAmountViewRequests(userId);
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

        public List<Common.Permissions> getAllPermissions(int toPermission)
        {
            List<Dal.Permission> allPermission = new getFromDataBase().getAllPermissions(toPermission);
            return allPermission.Select(p1 => Converters.ConvertToCommon.Permissions(p1)).ToList();

        }


        public List<Common.Permissions> getlistInvitation(int WatchUserId)
        {
            List<Dal.Permission> allPermission = new getFromDataBase().getlistInvitation(WatchUserId);
            return allPermission.Select(p1 => Converters.ConvertToCommon.Permissions(p1)).ToList();

        }

        public bool IsAllowPermission(int time, Permissions p)
        {
            return save.IsAllowPermission(time, p);
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

        public bool checkUserBlock(int myId, int userId)
        {
            return get.checkUserBlock(myId, userId);
        }


        /*BlockIP*/



    }
}