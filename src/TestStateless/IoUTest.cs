using System.Collections.Generic;
using System.Linq;
using Stateless;
using OryxESS.Entities.Workflow;
using System;
using OryxESS.Entities.iou;

namespace TestStateless
{

    public class IoUTest
    {
        private enum Trigger
        {
            StartDevelopment,
            DevelopmentFinished,
            StartTest,
            TestPassed,
            TestFailed
        }
        List<WFStates> _wfStates = new List<WFStates>();
        List<WFTriggers> _wftriggers = new List<WFTriggers>();
        List<WFPermittedTrigger> _wfPermitted = new List<WFPermittedTrigger>();


        iouHeader IOU;

        private Dictionary<int, TestStateless.State> states = new Dictionary<int, State>();

        StateMachine<int, int> WFMachine;
        StateMachine<int, Trigger>.TriggerWithParameters<string> _assignTrigger;
        StateMachine<int, int>.Transition _Transition;

        WFStates nState;

        public IoUTest(string Test)
        {


            _wfStates.Add(new WFStates
            {
                ID = 1,
                State = "New",
                StateName = "New Request",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                        {
                        new WFPermittedTrigger { ID = 1, StateID = 1, PermittedStateID = 2, TriggerID = 1},
                        new WFPermittedTrigger { ID = 2, StateID = 1, PermittedStateID = 5, TriggerID = 5}
                        }
            });

            _wfStates.Add(new WFStates
            {
                ID = 2,
                State = "HODApproved",
                StateName = "HOD Approval",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                    {
                        new WFPermittedTrigger { ID = 1, StateID = 2, PermittedStateID = 3, TriggerID = 2}

                    }
            });
            _wfStates.Add(new WFStates
            {
                ID = 3,
                State = "AccountApproved",
                StateName = "Account Approved",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                    {
                        new WFPermittedTrigger { ID = 1, StateID = 3, PermittedStateID = 4, TriggerID = 4}
                    }
            });

            _wfStates.Add(new WFStates
            {
                ID = 4,
                State = "Waiting for Payment",
                StateName = "Waiting for Payment",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                    {
                        new WFPermittedTrigger { ID = 1, StateID = 4, PermittedStateID = 6, TriggerID = 3}
                    }
            });
            _wfStates.Add(new WFStates { ID = 5, State = "Rejected", StateName = "Rejected" });
            _wfStates.Add(new WFStates { ID = 6, State = "Completed", StateName = "Completed" });



            _wftriggers.Add(new WFTriggers { ID = 1, Trigger = "Approved", Active = true });
            _wftriggers.Add(new WFTriggers { ID = 2, Trigger = "AccountApproved", Active = true });
            _wftriggers.Add(new WFTriggers { ID = 3, Trigger = "Rejected", Active = true });
            _wftriggers.Add(new WFTriggers { ID = 4, Trigger = "Paid", Active = true });
            _wftriggers.Add(new WFTriggers { ID = 5, Trigger = "Cancel", Active = true });

            //foreach (var WFStates in _wfStates)
            //{
            //    states.Add(WFStates.ID, new State(WFStates.ID, null, null));
            //}
        }

        public void Run()
        {
            nState = _wfStates[0];
            //var newState = new State()
            IOU = new iouHeader()
            {
                Status = 1,
                ID = 1
            };

            WFMachine = new StateMachine<int, int>(
                () => IOU.Status,
                s => IOU.Status = s);

            int i = 0;
            foreach (var state in _wfStates)
            {
                i++;
                //nState = _wfStates.Where(item => item.ID == state.Value.Name).FirstOrDefault();

                WFMachine.Configure(state.ID)
                     .OnEntry(() => PrintStateOnEntry())
                     .OnExit(t => PrintStateOnExit());

                foreach (var WFPermittedTrigger in state.WFPermittedTriggers)
                {
                    var destState = _wfStates.Where(item => item.ID == WFPermittedTrigger.PermittedStateID).FirstOrDefault();
                    var trig = _wftriggers.Where(item => item.ID == WFPermittedTrigger.TriggerID).FirstOrDefault();
                    WFMachine.Configure(state.ID)
                   .Permit(trig.ID, destState.ID);
                }
            }

            var forFireState = _wfStates.FirstOrDefault();
            if (WFMachine.CanFire(1))
            {
                WFMachine.Fire(1);
            }

            if (WFMachine.CanFire(2))
            {
                WFMachine.Fire(2);
            }

            if (WFMachine.CanFire(4))
            {
                WFMachine.Fire(4);
            }

        }


        void PrintStateOnEntry()
        {
            //IOU.Status = WFMachine.State;
            Console.WriteLine(string.Format("Entered state : {0}", _wfStates.Where(item => item.ID == WFMachine.State).FirstOrDefault().StateName));
            Console.WriteLine(string.Format("Entered state : {0}", WFMachine.State));
        }

        void PrintStateOnExit(StateMachine<int, int>.Transition _Transition)
        {
            Console.WriteLine(_Transition.Source);
            Console.WriteLine(string.Format("Exited state : {0}", _wfStates.Where(item => item.ID == WFMachine.State).FirstOrDefault().StateName));
            Console.WriteLine(string.Format("Entered state : {0}", WFMachine.State));
        }

        void PrintStateOnExit()
        {

            Console.WriteLine(string.Format("Exited state : {0}", _wfStates.Where(item => item.ID == WFMachine.State).FirstOrDefault().StateName));
            Console.WriteLine(string.Format("Entered state : {0}", WFMachine.State));
        }
        static void Fire(StateMachine<int, int> WFMachine, int trigger)
        {
            Console.WriteLine("[Firing:] {0}", trigger);
            WFMachine.Fire(trigger);
            Console.WriteLine("[Firing:] {0}", trigger);
        }
    }
}
