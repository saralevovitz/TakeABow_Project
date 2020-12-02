using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Common
{
    public class Feedbacks
    {
        public int Id { get; set; }
        public int FromUserId { get; set; }
        public int ToUserId { get; set; }
        public string Feedback { get; set; }
        public bool IsAnonymous { get; set; }
        public bool IsSeen { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }


        public Feedbacks()
        {
        }
        public Feedbacks (int fui, int tui, string f, bool ia, bool ise, bool idel)
        {
            this.FromUserId = fui;
            this.ToUserId = tui;
            this.Feedback = f;
            this.IsAnonymous = ia;
            this.IsSeen=ise;
            this.IsDeleted = idel;
            this.CreateDate = DateTime.Now;
        }
  
    }
}