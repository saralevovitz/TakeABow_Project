using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Common
{
    public class User
    {
        public int Id { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Job { get; set; }
        public bool Is_Deleted { get; set; }
        public DateTime Create_Date { get; set; }

        public bool IsBlocked { get; set; }
        public bool? IsAllow { get; set; }


        public User()
        {

        }

        public  User( User user)
        {          
            
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.Phone = user.Phone;
            this.Email = user.Email;
            this.Job = user.Job;
            this.Password = user.Password;
            this.Is_Deleted = false;
            this.Create_Date = DateTime.Now;
        }
        
    }
}