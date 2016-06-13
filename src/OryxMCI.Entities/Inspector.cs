namespace OryxMCI.Entities
{
    public class Inspector :  IEntityBase
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public bool Current { get; set; }
    }
}