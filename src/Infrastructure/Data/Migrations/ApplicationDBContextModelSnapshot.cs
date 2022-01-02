﻿// <auto-generated />
using System;
using BusinessReviewer.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BusinessReviewer.Infrastructure.Data.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.0");

            modelBuilder.Entity("BusinessReviewer.Domain.Entities.Business", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("BusinessAddress")
                        .HasColumnType("TEXT");

                    b.Property<double>("BusinessLatitude")
                        .HasColumnType("REAL");

                    b.Property<double>("BusinessLongitude")
                        .HasColumnType("REAL");

                    b.Property<string>("BusinessName")
                        .HasColumnType("TEXT");

                    b.Property<string>("BusinessType")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Businesses");
                });

            modelBuilder.Entity("BusinessReviewer.Domain.Entities.Review", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("BusinessId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("ReviewDescription")
                        .HasColumnType("TEXT");

                    b.Property<int>("ReviewGrade")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ReviewTitle")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("ReviewerId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
