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
        [Route("api/permissions/ViewConfirmation")]
        public bool ViewConfirmation(Common.Permissions permission)
        {
            bool confirmed‏ = false;
            int weeks = 1;

            if (confirmed‏ == true)
            {
                Permissions p = new Permissions(num_permission_id++, permission.UserId, permission.WatchUserId, true, DateTime.Now.AddDays(weeks * 7));
                if (logic.AddPermission(p))
                    return true;
                return false;
            }
            return false;

        }

        //[HttpGet]
        //[Route("api/permissions/getUserToPermissions/{watchUserId}")]

        //public String getUserToPermissions(int watchUserId)
        //{

        //    var u = logic.getUserToPermissions(watchUserId);
        //    return u;



        //}


        [HttpGet]
        [Route("api/permissions/getAllPermissions/{toPermission}")]
        public List<Permissions> getAllPermissions(int toPermission)
        {

            if (logic.getAllPermissions(toPermission) == null)
                return null;
            return logic.getAllPermissions(toPermission);
        }


        [HttpPost]
        [Route("api/permissions/IsAllowPermission")]
        public bool IsAllowPermission(Common.Permissions p)
        {
            if (logic.IsAllowPermission(p))
                return true;
            else return false;
        }

        [HttpGet]
        [Route("api/permissions/getlistInvitation/{WatchUserId}")]
        public List<Permissions> getlistInvitation(int WatchUserId)
        {

            if (logic.getlistInvitation(WatchUserId) == null)
                return null;
            return logic.getlistInvitation(WatchUserId);
        }

    }

}