namespace BusinessReviewer.Infrastructure.Data.Migrations;

public partial class InitialMigration : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Reviews",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                BusinessName = table.Column<string>(type: "TEXT", nullable: true),
                BusinessType = table.Column<string>(type: "TEXT", nullable: true),
                BusinessAddress = table.Column<string>(type: "TEXT", nullable: true),
                ReviewerUsername = table.Column<string>(type: "TEXT", nullable: true),
                ReviewerName = table.Column<string>(type: "TEXT", nullable: true),
                ReviewTitle = table.Column<string>(type: "TEXT", nullable: true),
                ReviewGrade = table.Column<double>(type: "REAL", nullable: false),
                ReviewDescription = table.Column<string>(type: "TEXT", nullable: true),
                DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Reviews", x => x.Id);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Reviews");
    }
}