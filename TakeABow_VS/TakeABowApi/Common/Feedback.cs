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

        public string FromUserFullName { get; set; }


        public Feedbacks()
        {
        }
        public Feedbacks (Feedbacks feedback)
        {
            this.FromUserId = feedback.FromUserId;
            this.ToUserId = feedback.ToUserId;
            this.Feedback = feedback.Feedback;
            this.IsAnonymous = feedback.IsAnonymous;
            this.IsSeen= feedback.IsSeen;
            this.IsDeleted = feedback.IsDeleted;
            this.CreateDate = DateTime.Now;
        }
  
    }
}