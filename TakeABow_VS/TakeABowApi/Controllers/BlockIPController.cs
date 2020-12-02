using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TakeABowApi.Common;

namespace TakeABowApi.Controllers
{
    public class BlockIPController : ApiController
    {
        public string isBlocked(string ip)
        {
            return "false";
        }

    }
}