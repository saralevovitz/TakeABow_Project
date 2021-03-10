using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TakeABowApi.Common;

namespace TakeABowApi.Controllers
{
    public class FeedbackController : ApiController
    {
         int num_feedback_id = 1000;

        TakeABowApi.Logic.Logic logic = new TakeABowApi.Logic.Logic();

        [HttpGet]
        [Route("api/feedback/test")]
        public bool Get()
        {  
            return true;
        }


        [HttpPost]
        [Route("api/feedback/createFeedback")]
        public bool createFeedback( int sendTo, [FromBody] Feedbacks feedback)
        {
            Feedbacks f = new Feedbacks(feedback);
            bool res = logic.saveNewFeedback(sendTo,f);
            if(res)
               return true;
            return false;

        }

        [HttpGet]
        [Route("api/feedback/getAllFeedbackByUser/{userId}")]
        public List<Common.Feedbacks> getAllFeedbackByUser(int userId)
        {

            if (logic.getAllFeedbackByUser(userId) == null)
                return null;
            return logic.getAllFeedbackByUser(userId);

        }

        [HttpGet]
        [Route("api/feedback/GetListfeedbackByUser/{userId}")]
        public List<Common.Feedbacks> GetListfeedbackByUser(int userId)
        {
            List<Feedbacks> f;
            f = logic.GetListfeedbackByUser(userId);
            if ( f== null)
                return null;
            return f;

        }


        [HttpGet]
        [Route("api/feedback/ViewAllFeedbacks/{userId}")]
        public List<Feedbacks> ViewAllFeedbacks(int userId)
        {
            if (logic.ViewAllFeedbacks(userId) == null)
                return null;
            return logic.ViewAllFeedbacks(userId);
        }
        [HttpGet]
        [Route("api/feedback/getNameUserToFeedback/{userId}")]//לבדוק אם משתמשים בה
        public string getNameUserToFeedback(int userId)
        {
            User u= logic.GetUser(userId);
            var name = u.FirstName+"  "+u.LastName ;

            return name;
        }

        [HttpPost]
        [Route("api/feedback/deleteFeedback")]
        public bool deleteFeedback([FromBody]int idFeedback)
        {

            var res = logic.deleteFeedback(idFeedback);
            return res;
        }

        [HttpPost]
        [Route("api/feedback/readFeeback/{idFeedback}")]
        public bool readFeedback([FromUri] int idFeedback, [FromBody] int FromUserId)
        {
            var res = logic.readFeedback(idFeedback, FromUserId);

            return res;
        }


        [HttpGet]
        [Route("api/feedback/getAllFeedbacksTop/{userId}")]
        public List<Common.Feedbacks> getAllFeedbacksTop(int userId)
        {
            List<Feedbacks> f = logic.getFeedbackTop(userId);
            

            return f;
        }


        [HttpGet]
        [Route("api/feedback/amountFeedbacks/{userId}")]
         public int amountFeedbacks(int userId)
         {
            int mone = logic.amountFeedbacks(userId);
            return mone;
         }
    }
    


}