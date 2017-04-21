namespace Dao.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNameForUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "Name");
        }
    }
}
