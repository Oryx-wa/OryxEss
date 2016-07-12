using Microsoft.EntityFrameworkCore;
using OryxESS.Entities.iou;
using OryxESS.Entities.Workflow;
using OryxESS.Entities.hr;
using OryxESS.Entities;
using System;
using OryxESS.Entities.ERP;

namespace OryxESS.Data
{
    public class OryxDataValidation
    {
        public static void ModelConfiguration(ref ModelBuilder builder)
        {
            // Agent
            //builder.Entity<Agent>().HasKey(m => m.Id);
            //builder.Entity<Agent>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            //builder.Entity<Agent>().Property(m => m.Name).IsRequired().HasMaxLength(100);
            //

            //HR

            //Employees

            builder.Entity<Employee>().HasKey(m => m.EmployeeId);
            builder.Entity<Employee>().HasAlternateKey(m => m.StaffNo);
            builder.Entity<Employee>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //Departments
            builder.Entity<Department>().HasAlternateKey(m => m.DepartmentName);
            builder.Entity<Department>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //Error Management
            builder.Entity<Error>().Property(m => m.DateCreated).HasDefaultValueSql("getDate()");
            builder.Entity<Error>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //IOU
            //iouHeaader
            builder.Entity<iouHeader>().Property(m => m.DocDate).HasDefaultValueSql("getDate()");
            builder.Entity<iouHeader>().Property(m => m.DueDate).HasDefaultValueSql("getDate()");
            builder.Entity<iouHeader>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
           

            //iouPayment
            builder.Entity<iouPayment>().HasKey(i => new { i.LineId, i.IouId });
            builder.Entity<iouPayment>().Property(m => m.LineId).ValueGeneratedNever();
            builder.Entity<iouPayment>().Property(m => m.IouId).ValueGeneratedNever();
            builder.Entity<iouPayment>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            //builder.Entity<iouPayment>().Property(m => m.Amount).HasDefaultValue(0.00);

            //iouStatus
            builder.Entity<iouStatus>().HasKey(i => new { i.LineId, i.IouId });
            builder.Entity<iouStatus>().Property(m => m.LineId).ValueGeneratedNever();
            builder.Entity<iouStatus>().Property(m => m.IouId).ValueGeneratedNever();
            builder.Entity<iouStatus>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<iouStatus>().Property(m => m.StatusDate).HasDefaultValueSql("getDate()");


            //iouRetirement
            builder.Entity<iouRetirement>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<iouRetirement>().Property(m => m.RetirementDate).HasDefaultValueSql("getDate()");

            //iouRetirementLines
            builder.Entity<iouRetirementLines>().HasKey(m => new { m.LineId, m.IouRetId });
            builder.Entity<iouRetirementLines>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            //builder.Entity<iouRetirementLines>().Property(m => m.RetAmount).HasDefaultValue(0.00);

            //RetirementTypes
            builder.Entity<RetirementTypes>().HasAlternateKey(m => m.Code);
            builder.Entity<RetirementTypes>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");


            //Workflow

            //WFStates
            builder.Entity<WFStates>().HasAlternateKey(m => m.State);
            builder.Entity<WFStates>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //WFTriggers
            builder.Entity<WFTriggers>().Property(m => m.TriggerId).ValueGeneratedOnAdd();
            builder.Entity<WFTriggers>().Property(m => m.Trigger).ValueGeneratedNever();
            builder.Entity<WFTriggers>().HasAlternateKey(m => m.Trigger);
            builder.Entity<WFTriggers>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //WFPermittedTrigger
            builder.Entity<WFPermittedTrigger>().HasKey(m => new { m.LineId, m.State, m.Trigger });
            builder.Entity<WFPermittedTrigger>()
                .HasOne(m => m.WFState)
                .WithMany(m => m.WFPermittedTriggers)
                .HasForeignKey(m => m.State)
                .HasPrincipalKey(m => m.State);
            builder.Entity<WFPermittedTrigger>()
                .HasOne(m => m.WFTrigger)
                .WithMany(m => m.WFPermittedTriggers)
                .HasForeignKey(m => m.Trigger)
                .HasPrincipalKey(m => m.Trigger);
            builder.Entity<WFPermittedTrigger>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //Workflow
            builder.Entity<WorkFlow>().HasAlternateKey(m => m.WorkFlowCode);
            builder.Entity<WorkFlow>().Property(m => m.WorkFlowCode).ValueGeneratedNever();
            builder.Entity<WorkFlow>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<WorkFlow>().Property(m => m.Status).HasDefaultValue(true);

            //WorkflowState
            builder.Entity<WorkFlowState>().HasAlternateKey(m => new { m.StateCode, m.WorkFlowId });
            builder.Entity<WorkFlowState>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<WorkFlowState>().Property(m => m.Status).HasDefaultValue(true);

            //WorkflowStateApprover
            builder.Entity<WorkFlowStateApprover>().HasKey(m => new { m.LineId, m.WorkFlowStateId });
            
            builder.Entity<WorkFlowStateApprover>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<WorkFlowStateApprover>().Property(m => m.Status).HasDefaultValue(true);

            //ERP

            //GLCode
            builder.Entity<GLCode>().HasAlternateKey(m => m.Code );
            builder.Entity<GLCode>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<GLCode>().Property(m => m.Status).HasDefaultValue(true);

            //BP
            builder.Entity<BP>().HasAlternateKey(m => m.Code);
            builder.Entity<BP>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");
            builder.Entity<BP>().Property(m => m.Status).HasDefaultValue(true);
        }

    }
}