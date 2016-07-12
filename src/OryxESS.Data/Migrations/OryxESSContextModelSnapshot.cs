using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using OryxESS.Data;

namespace OryxESS.Data.Migrations
{
    [DbContext(typeof(OryxESSContext))]
    partial class OryxESSContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OryxESS.Entities.ERP.BP", b =>
                {
                    b.Property<int>("BPCodeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("ControlAccount")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<bool>("Status")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("BPCodeId");

                    b.HasAlternateKey("Code");

                    b.ToTable("BP");
                });

            modelBuilder.Entity("OryxESS.Entities.ERP.GLCode", b =>
                {
                    b.Property<int>("GLCodeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<bool>("Status")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("GLCodeId");

                    b.HasAlternateKey("Code");

                    b.ToTable("GLCode");
                });

            modelBuilder.Entity("OryxESS.Entities.Error", b =>
                {
                    b.Property<int>("ErrorID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 254);

                    b.Property<string>("StackTrace");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("ErrorID");

                    b.ToTable("Error");
                });

            modelBuilder.Entity("OryxESS.Entities.hr.Department", b =>
                {
                    b.Property<int>("DepartmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("DepartmentName")
                        .IsRequired();

                    b.Property<int>("HOD");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("DepartmentId");

                    b.HasAlternateKey("DepartmentName");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("OryxESS.Entities.hr.Employee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BPCode")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<decimal>("Balance");

                    b.Property<string>("Blocked");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<int>("DepartmentID");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Mobile1")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Mobile2")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("StaffNo")
                        .IsRequired();

                    b.Property<string>("Status")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<int>("userId");

                    b.HasKey("EmployeeId");

                    b.HasAlternateKey("StaffNo");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouHeader", b =>
                {
                    b.Property<int>("IouId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comments")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 250);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("DocDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("DueDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<int>("EmployeeID");

                    b.Property<string>("ProjectCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<decimal>("RequestAmount");

                    b.Property<string>("SiteCode")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Status");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("IouId");

                    b.ToTable("iouHeader");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouPayment", b =>
                {
                    b.Property<int>("LineId");

                    b.Property<int>("IouId");

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("DocDate");

                    b.Property<int>("DocNum");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("LineId", "IouId");

                    b.HasIndex("IouId");

                    b.ToTable("iouPayment");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouRetirement", b =>
                {
                    b.Property<int>("IouRetId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<int>("IouId");

                    b.Property<DateTime>("RetirementDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<decimal>("TotalAmount");

                    b.Property<DateTime>("TransDate");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<string>("comments");

                    b.Property<int>("transid");

                    b.HasKey("IouRetId");

                    b.HasIndex("IouId");

                    b.ToTable("iouRetirement");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouRetirementLines", b =>
                {
                    b.Property<int>("LineId");

                    b.Property<int>("IouRetId");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("LineMemo")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 250);

                    b.Property<string>("ProjectCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<decimal>("RetAmount");

                    b.Property<string>("RetTypeCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("LineId", "IouRetId");

                    b.HasIndex("IouRetId");

                    b.ToTable("iouRetirementLines");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouStatus", b =>
                {
                    b.Property<int>("LineId");

                    b.Property<int>("IouId");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<int>("EmployeeID");

                    b.Property<string>("Remark")
                        .HasAnnotation("MaxLength", 250);

                    b.Property<string>("StateCode")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<DateTime>("StatusDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("LineId", "IouId");

                    b.HasIndex("IouId");

                    b.ToTable("iouStatus");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.RetirementTypes", b =>
                {
                    b.Property<int>("RetTypeId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("GLCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("RetTypeId");

                    b.HasAlternateKey("Code");

                    b.ToTable("RetirementTypes");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WFPermittedTrigger", b =>
                {
                    b.Property<int>("LineId");

                    b.Property<string>("State")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Trigger")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<bool>("Active");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("PermittedStateCode")
                        .IsRequired();

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("LineId", "State", "Trigger");

                    b.HasIndex("State");

                    b.HasIndex("Trigger");

                    b.ToTable("WFPermittedTrigger");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WFStates", b =>
                {
                    b.Property<int>("StateId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("StateName")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<string>("appCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.HasKey("StateId");

                    b.ToTable("WFStates");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WFTriggers", b =>
                {
                    b.Property<int>("TriggerId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Trigger")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("TriggerId");

                    b.ToTable("WFTriggers");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WorkFlow", b =>
                {
                    b.Property<int>("WorkFlowId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<bool>("Status")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<string>("WorkFlowCode")
                        .IsRequired();

                    b.Property<string>("WorkFlowName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("appCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.HasKey("WorkFlowId");

                    b.HasAlternateKey("WorkFlowCode");

                    b.ToTable("WorkFlow");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WorkFlowState", b =>
                {
                    b.Property<int>("WorkFlowStateId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("StateCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 30);

                    b.Property<bool>("Status")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<int>("WorkFlowId");

                    b.HasKey("WorkFlowStateId");

                    b.HasAlternateKey("StateCode", "WorkFlowId");

                    b.HasIndex("WorkFlowId");

                    b.ToTable("WorkFlowState");
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WorkFlowStateApprover", b =>
                {
                    b.Property<int>("LineId");

                    b.Property<int>("WorkFlowStateId");

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<int>("EmployeeId");

                    b.Property<bool>("Status")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("LineId", "WorkFlowStateId");

                    b.HasIndex("WorkFlowStateId");

                    b.ToTable("WorkFlowStateApprover");
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouPayment", b =>
                {
                    b.HasOne("OryxESS.Entities.iou.iouHeader", "iou")
                        .WithMany("iouPayments")
                        .HasForeignKey("IouId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouRetirement", b =>
                {
                    b.HasOne("OryxESS.Entities.iou.iouHeader", "IouHeader")
                        .WithMany("iouRetirements")
                        .HasForeignKey("IouId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouRetirementLines", b =>
                {
                    b.HasOne("OryxESS.Entities.iou.iouRetirement", "IouRetirement")
                        .WithMany("RetirementLines")
                        .HasForeignKey("IouRetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.iou.iouStatus", b =>
                {
                    b.HasOne("OryxESS.Entities.iou.iouHeader", "iou")
                        .WithMany("iouStatuses")
                        .HasForeignKey("IouId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WFPermittedTrigger", b =>
                {
                    b.HasOne("OryxESS.Entities.Workflow.WFStates", "WFState")
                        .WithMany("WFPermittedTriggers")
                        .HasForeignKey("State")
                        .HasPrincipalKey("State")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OryxESS.Entities.Workflow.WFTriggers", "WFTrigger")
                        .WithMany("WFPermittedTriggers")
                        .HasForeignKey("Trigger")
                        .HasPrincipalKey("Trigger")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WorkFlowState", b =>
                {
                    b.HasOne("OryxESS.Entities.Workflow.WorkFlow")
                        .WithMany("WorkFlowStates")
                        .HasForeignKey("WorkFlowId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OryxESS.Entities.Workflow.WorkFlowStateApprover", b =>
                {
                    b.HasOne("OryxESS.Entities.Workflow.WorkFlowState", "WorkFlowState")
                        .WithMany()
                        .HasForeignKey("WorkFlowStateId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
