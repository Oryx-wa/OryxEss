namespace OryxESS.Entities
{
    public class Employee :  IEntityBase

    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StaffNo { get; set; }
        public int DepartmentID { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
        public decimal Balance { get; set; }
        public string Blocked { get; set; }
        public string Mobile1 { get; set; }
        public string Mobile2 { get; set; }



    }
}
