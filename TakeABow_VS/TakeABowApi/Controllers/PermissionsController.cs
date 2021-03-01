using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Reflection.Emit;
using System.Web.Http;
using TakeABowApi.Common;

namespace TakeABowApi.Controllers
{
    public class PermissionsController : ApiController
    {

            
        int num_permission_id = 100;
        TakeABowApi.Logic.Logic logic = new TakeABowApi.Logic.Logic();

        [HttpGet]
        [Route("api/permissions/test")]
        public bool Get()
        {
            return true;
        }

        [HttpPost]
        [Route("api/permissions/ViewConfirmation")]//שליחת בקשת צפיה 
        public bool ViewConfirmation(Common.Permissions permission)
        {
                       
                Permissions p = new Permissions( permission.UserId, permission.WatchUserId, null,null);
                if (logic.AddPermission(p))
                    return true;
                return false;
           

        }


        [HttpGet]
        [Route("api/permissions/getAllPermissions/{toPermission}")]//רשימה של כל הבקשות צפיה לא כולל אלה שאושרו
        public List<Permissions> getAllPermissions(int toPermission)
        {

            if (logic.getAllPermissions(toPermission) == null)
                return null;
            return logic.getAllPermissions(toPermission);
        }


        [HttpPost]
        [Route("api/permissions/IsAllowPermission/{time}")]// קבלת או דחיית בקשת צפיה
        public bool IsAllowPermission([FromUri] int time, [FromBody] Permissions p)
        {
            if (logic.IsAllowPermission(time, p))
                return true;
            else return false;
        }

        [HttpGet]
        [Route("api/permissions/getlistInvitation/{WatchUserId}")]
        public List<Permissions> getlistInvitation(int WatchUserId)//רשימת הבקשות ששלחתי לאחרים
        {

            if (logic.getlistInvitation(WatchUserId) == null)
                return null;
            return logic.getlistInvitation(WatchUserId);
        }


        [HttpGet]
        [Route("api/permissions/amountViewRequests/{toUserId}")]//כמות ההזמנות ששלחו אלי ועדיין לא ראיתי
        public int amountViewRequests(int toUserId)
        {
            int mone = logic.amountViewRequests(toUserId);
            return mone;
        }

    }

}