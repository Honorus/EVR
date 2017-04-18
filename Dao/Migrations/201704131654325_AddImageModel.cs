namespace Dao.Migration
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddImageModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Image",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        ImageName = c.String(),
                        ImageUrl = c.String(),
                        Extension = c.String(),
                        Rating = c.Int(nullable: false),
                        Owner_Id = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.Owner_Id, cascadeDelete: true)
                .Index(t => t.Owner_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Image", "Owner_Id", "dbo.User");
            DropIndex("dbo.Image", new[] { "Owner_Id" });
            DropTable("dbo.Image");
            DropTable("dbo.User");
        }
    }
}
