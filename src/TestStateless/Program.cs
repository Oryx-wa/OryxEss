using System;

namespace TestStateless
{
    public class Program
    {
        static void Main(string[] args)
        {
            //var bug = new Bug("Incorrect stock count");

            //bug.Assign("Joe");
            //bug.Defer();
            //bug.Assign("Harry");
            //bug.Assign("Fred");
            //bug.Close();

            var iouTest = new IoUTest("Test");

            iouTest.Run();

            Console.ReadKey(true);
        }
    }
}
