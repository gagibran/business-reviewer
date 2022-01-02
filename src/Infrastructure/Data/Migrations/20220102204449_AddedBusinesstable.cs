using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class AddedBusinesstable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BusinessAddress",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "BusinessLatitude",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "BusinessLongitude",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "BusinessName",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "BusinessType",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ReviewerName",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ReviewerUsername",
                table: "Reviews");

            migrationBuilder.AlterColumn<int>(
                name: "ReviewGrade",
                table: "Reviews",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AddColumn<Guid>(
                name: "BusinessId",
                table: "Reviews",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ReviewerId",
                table: "Reviews",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Businesses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    BusinessName = table.Column<string>(type: "TEXT", nullable: true),
                    BusinessAddress = table.Column<string>(type: "TEXT", nullable: true),
                    BusinessType = table.Column<string>(type: "TEXT", nullable: true),
                    BusinessLatitude = table.Column<double>(type: "REAL", nullable: false),
                    BusinessLongitude = table.Column<double>(type: "REAL", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Businesses", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Businesses");

            migrationBuilder.DropColumn(
                name: "BusinessId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ReviewerId",
                table: "Reviews");

            migrationBuilder.AlterColumn<double>(
                name: "ReviewGrade",
                table: "Reviews",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<string>(
                name: "BusinessAddress",
                table: "Reviews",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "BusinessLatitude",
                table: "Reviews",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "BusinessLongitude",
                table: "Reviews",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "BusinessName",
                table: "Reviews",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BusinessType",
                table: "Reviews",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReviewerName",
                table: "Reviews",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReviewerUsername",
                table: "Reviews",
                type: "TEXT",
                nullable: true);
        }
    }
}
