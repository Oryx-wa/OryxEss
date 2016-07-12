using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OryxESS.Data.Migrations
{
    public partial class OryxEss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BP",
                columns: table => new
                {
                    BPCodeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(maxLength: 100, nullable: false),
                    ControlAccount = table.Column<string>(maxLength: 100, nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    Status = table.Column<bool>(nullable: false, defaultValue: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BP", x => x.BPCodeId);
                    table.UniqueConstraint("AK_BP_Code", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "GLCode",
                columns: table => new
                {
                    GLCodeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(maxLength: 100, nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    Status = table.Column<bool>(nullable: false, defaultValue: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GLCode", x => x.GLCodeId);
                    table.UniqueConstraint("AK_GLCode_Code", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "Error",
                columns: table => new
                {
                    ErrorID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DateCreated = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Message = table.Column<string>(maxLength: 254, nullable: false),
                    StackTrace = table.Column<string>(nullable: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Error", x => x.ErrorID);
                });

            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    DepartmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DepartmentName = table.Column<string>(nullable: false),
                    HOD = table.Column<int>(nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.DepartmentId);
                    table.UniqueConstraint("AK_Department_DepartmentName", x => x.DepartmentName);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    EmployeeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BPCode = table.Column<string>(maxLength: 30, nullable: true),
                    Balance = table.Column<decimal>(nullable: false),
                    Blocked = table.Column<string>(nullable: true),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DepartmentID = table.Column<int>(nullable: false),
                    Email = table.Column<string>(maxLength: 200, nullable: false),
                    FirstName = table.Column<string>(maxLength: 30, nullable: false),
                    LastName = table.Column<string>(maxLength: 30, nullable: false),
                    Mobile1 = table.Column<string>(maxLength: 30, nullable: false),
                    Mobile2 = table.Column<string>(maxLength: 30, nullable: true),
                    StaffNo = table.Column<string>(nullable: false),
                    Status = table.Column<string>(maxLength: 30, nullable: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    userId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.EmployeeId);
                    table.UniqueConstraint("AK_Employee_StaffNo", x => x.StaffNo);
                });

            migrationBuilder.CreateTable(
                name: "iouHeader",
                columns: table => new
                {
                    IouId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Comments = table.Column<string>(maxLength: 250, nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DocDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DueDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    EmployeeID = table.Column<int>(nullable: false),
                    ProjectCode = table.Column<string>(maxLength: 30, nullable: false),
                    RequestAmount = table.Column<decimal>(nullable: false),
                    SiteCode = table.Column<string>(maxLength: 30, nullable: true),
                    Status = table.Column<string>(nullable: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iouHeader", x => x.IouId);
                });

            migrationBuilder.CreateTable(
                name: "RetirementTypes",
                columns: table => new
                {
                    RetTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(maxLength: 20, nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    GLCode = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RetirementTypes", x => x.RetTypeId);
                    table.UniqueConstraint("AK_RetirementTypes_Code", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "WFStates",
                columns: table => new
                {
                    StateId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    State = table.Column<string>(maxLength: 30, nullable: false),
                    StateName = table.Column<string>(maxLength: 30, nullable: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    appCode = table.Column<string>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WFStates", x => x.StateId);
                    table.UniqueConstraint("AK_WFStates_State", x => x.State);
                });

            migrationBuilder.CreateTable(
                name: "WFTriggers",
                columns: table => new
                {
                    TriggerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Trigger = table.Column<string>(maxLength: 30, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WFTriggers", x => x.TriggerId);
                    table.UniqueConstraint("AK_WFTriggers_Trigger", x => x.Trigger);
                });

            migrationBuilder.CreateTable(
                name: "WorkFlow",
                columns: table => new
                {
                    WorkFlowId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Status = table.Column<bool>(nullable: false, defaultValue: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    WorkFlowCode = table.Column<string>(nullable: false),
                    WorkFlowName = table.Column<string>(maxLength: 100, nullable: false),
                    appCode = table.Column<string>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkFlow", x => x.WorkFlowId);
                    table.UniqueConstraint("AK_WorkFlow_WorkFlowCode", x => x.WorkFlowCode);
                });

            migrationBuilder.CreateTable(
                name: "iouPayment",
                columns: table => new
                {
                    LineId = table.Column<int>(nullable: false),
                    IouId = table.Column<int>(nullable: false),
                    Amount = table.Column<decimal>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    DocDate = table.Column<DateTime>(nullable: false),
                    DocNum = table.Column<int>(nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iouPayment", x => new { x.LineId, x.IouId });
                    table.ForeignKey(
                        name: "FK_iouPayment_iouHeader_IouId",
                        column: x => x.IouId,
                        principalTable: "iouHeader",
                        principalColumn: "IouId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "iouRetirement",
                columns: table => new
                {
                    IouRetId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    IouId = table.Column<int>(nullable: false),
                    RetirementDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    TransDate = table.Column<DateTime>(nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    comments = table.Column<string>(nullable: true),
                    transid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iouRetirement", x => x.IouRetId);
                    table.ForeignKey(
                        name: "FK_iouRetirement_iouHeader_IouId",
                        column: x => x.IouId,
                        principalTable: "iouHeader",
                        principalColumn: "IouId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "iouStatus",
                columns: table => new
                {
                    LineId = table.Column<int>(nullable: false),
                    IouId = table.Column<int>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    EmployeeID = table.Column<int>(nullable: false),
                    Remark = table.Column<string>(maxLength: 250, nullable: true),
                    StateCode = table.Column<string>(maxLength: 30, nullable: true),
                    StatusDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iouStatus", x => new { x.LineId, x.IouId });
                    table.ForeignKey(
                        name: "FK_iouStatus_iouHeader_IouId",
                        column: x => x.IouId,
                        principalTable: "iouHeader",
                        principalColumn: "IouId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WFPermittedTrigger",
                columns: table => new
                {
                    LineId = table.Column<int>(nullable: false),
                    State = table.Column<string>(maxLength: 30, nullable: false),
                    Trigger = table.Column<string>(maxLength: 30, nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    PermittedStateCode = table.Column<string>(nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WFPermittedTrigger", x => new { x.LineId, x.State, x.Trigger });
                    table.ForeignKey(
                        name: "FK_WFPermittedTrigger_WFStates_State",
                        column: x => x.State,
                        principalTable: "WFStates",
                        principalColumn: "State",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WFPermittedTrigger_WFTriggers_Trigger",
                        column: x => x.Trigger,
                        principalTable: "WFTriggers",
                        principalColumn: "Trigger",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkFlowState",
                columns: table => new
                {
                    WorkFlowStateId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    StateCode = table.Column<string>(maxLength: 30, nullable: false),
                    Status = table.Column<bool>(nullable: false, defaultValue: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    WorkFlowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkFlowState", x => x.WorkFlowStateId);
                    table.UniqueConstraint("AK_WorkFlowState_StateCode_WorkFlowId", x => new { x.StateCode, x.WorkFlowId });
                    table.ForeignKey(
                        name: "FK_WorkFlowState_WorkFlow_WorkFlowId",
                        column: x => x.WorkFlowId,
                        principalTable: "WorkFlow",
                        principalColumn: "WorkFlowId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "iouRetirementLines",
                columns: table => new
                {
                    LineId = table.Column<int>(nullable: false),
                    IouRetId = table.Column<int>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    LineMemo = table.Column<string>(maxLength: 250, nullable: false),
                    ProjectCode = table.Column<string>(maxLength: 30, nullable: false),
                    RetAmount = table.Column<decimal>(nullable: false),
                    RetTypeCode = table.Column<string>(maxLength: 50, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iouRetirementLines", x => new { x.LineId, x.IouRetId });
                    table.ForeignKey(
                        name: "FK_iouRetirementLines_iouRetirement_IouRetId",
                        column: x => x.IouRetId,
                        principalTable: "iouRetirement",
                        principalColumn: "IouRetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkFlowStateApprover",
                columns: table => new
                {
                    LineId = table.Column<int>(nullable: false),
                    WorkFlowStateId = table.Column<int>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    EmployeeId = table.Column<int>(nullable: false),
                    Status = table.Column<bool>(nullable: false, defaultValue: true),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkFlowStateApprover", x => new { x.LineId, x.WorkFlowStateId });
                    table.ForeignKey(
                        name: "FK_WorkFlowStateApprover_WorkFlowState_WorkFlowStateId",
                        column: x => x.WorkFlowStateId,
                        principalTable: "WorkFlowState",
                        principalColumn: "WorkFlowStateId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_iouPayment_IouId",
                table: "iouPayment",
                column: "IouId");

            migrationBuilder.CreateIndex(
                name: "IX_iouRetirement_IouId",
                table: "iouRetirement",
                column: "IouId");

            migrationBuilder.CreateIndex(
                name: "IX_iouRetirementLines_IouRetId",
                table: "iouRetirementLines",
                column: "IouRetId");

            migrationBuilder.CreateIndex(
                name: "IX_iouStatus_IouId",
                table: "iouStatus",
                column: "IouId");

            migrationBuilder.CreateIndex(
                name: "IX_WFPermittedTrigger_State",
                table: "WFPermittedTrigger",
                column: "State");

            migrationBuilder.CreateIndex(
                name: "IX_WFPermittedTrigger_Trigger",
                table: "WFPermittedTrigger",
                column: "Trigger");

            migrationBuilder.CreateIndex(
                name: "IX_WorkFlowState_WorkFlowId",
                table: "WorkFlowState",
                column: "WorkFlowId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkFlowStateApprover_WorkFlowStateId",
                table: "WorkFlowStateApprover",
                column: "WorkFlowStateId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BP");

            migrationBuilder.DropTable(
                name: "GLCode");

            migrationBuilder.DropTable(
                name: "Error");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "iouPayment");

            migrationBuilder.DropTable(
                name: "iouRetirementLines");

            migrationBuilder.DropTable(
                name: "iouStatus");

            migrationBuilder.DropTable(
                name: "RetirementTypes");

            migrationBuilder.DropTable(
                name: "WFPermittedTrigger");

            migrationBuilder.DropTable(
                name: "WorkFlowStateApprover");

            migrationBuilder.DropTable(
                name: "iouRetirement");

            migrationBuilder.DropTable(
                name: "WFStates");

            migrationBuilder.DropTable(
                name: "WFTriggers");

            migrationBuilder.DropTable(
                name: "WorkFlowState");

            migrationBuilder.DropTable(
                name: "iouHeader");

            migrationBuilder.DropTable(
                name: "WorkFlow");
        }
    }
}
