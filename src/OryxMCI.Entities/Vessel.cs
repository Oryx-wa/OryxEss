namespace OryxMCI.Entities
{
    public class Vessel : IEntityBase
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
