using System;
using Microsoft.EntityFrameworkCore;
using OryxMCI.Entities;

namespace OryxMCI.Data
{
    public class OryxDataValidation
    {
        public static void ModelConfiguration(ref ModelBuilder builder)
        {
            // Agent
            builder.Entity<Agent>().HasKey(m => m.Id);
            builder.Entity<Agent>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Agent>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Inspector
            builder.Entity<Inspector>().HasKey(m => m.Id);
            builder.Entity<Inspector>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Inspector>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Berth
            builder.Entity<Berth>().HasKey(m => m.Id);
            builder.Entity<Berth>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Berth>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Port
            builder.Entity<Port>().HasKey(m => m.Id);
            builder.Entity<Port>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Port>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Vessel
            builder.Entity<Vessel>().HasKey(m => m.Id);
            builder.Entity<Vessel>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Vessel>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Berth
            builder.Entity<Berth>().HasKey(m => m.Id);
            builder.Entity<Berth>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Berth>().Property(m => m.Name).IsRequired().HasMaxLength(100);
        }
    }
}