using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TakeABowApi.Common
{
    public class BlockIP
    {
        public string IPAddress { get; set; }
        public DateTime blockTime { get; set; }

        public BlockIP()
        {

        }
        public BlockIP(string ipA, DateTime bt)
        {
            this.IPAddress = ipA;
            this.blockTime = bt;
        }
    }
}