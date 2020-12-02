using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using TakeABowApi.Common;

namespace TakeABowApi.Dal
{
    public class TakaABowContext : DbContext
    {

        public TakaABowContext() : base(WebConfigurationManager.AppSettings["TakeABowDB"])
        {
        }
        public DbSet<Common.User> Users { get; set; }
        public DbSet<Feedbacks> Feedbacks { get; set; }
        public DbSet<Permissions> Permissions { get; set; }
        public DbSet<UsersBlocked> UsersBlocked { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            Database.SetInitializer<TakaABowContext>(null);
            base.OnModelCreating(modelBuilder);
        }

     
    }
}