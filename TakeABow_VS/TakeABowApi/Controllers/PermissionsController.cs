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

        [HttpGet]
        [Route("api/permissions/ViewConfirmation")]
        public bool GET(int userId, int userId2)
        {
            bool confirmed‏= true;
            int weeks = 1;

            if (confirmed‏==true)
            {
                Permissions p = new Permissions(  num_permission_id++, userId, userId2, true, DateTime.Now.AddDays(weeks * 7));
                if (logic.AddPermission(p))
                    return true;
                return false;
            }
            return false;

        }

       
    }
}