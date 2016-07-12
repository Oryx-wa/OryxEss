using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestStateless
{
    public class State
    {
        public int Name { get; private set; }

        /// <summary>
        /// Stateless has OnEntry/OnExit actions that can be run, but this just illustrates how you
        /// could go about creating your own states that run their own actions where good encapsulation is
        /// observed
        /// </summary>
        public Action<State> OnEntryStateAction { get; private set; }

        /// <summary>
        /// Stateless has OnEntry/OnExit actions that can be run, but this just illustrates how you
        /// could go about creating your own states that run their own actions where good encapsulation is
        /// observed
        /// </summary>
        public Action<State> OnExitStateAction { get; private set; }

        public State(int name, Action<State> onEntryStateAction, Action<State> onExitStateAction)
        {
            Name = name;
            OnEntryStateAction = onEntryStateAction;
            OnExitStateAction = onExitStateAction;
        }
    }
}
