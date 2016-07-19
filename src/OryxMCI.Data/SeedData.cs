using OryxMCI.Data;
using OryxMCI.Entities;
using System;
using System.Linq;

namespace OryxESS.Data
{

    public class SeedData
    {
        private OryxMCIContext _context;

        public SeedData(OryxMCIContext context)
        {
            _context = context;

        }

        public void EnsureSeedData()
        {
            try
            {
                if (!_context.AgentSet.Any())
                {
                    var Ag = new Agent()
                    {
                        Name = "Hakeem",
                        Code = "001"
                    };

                    _context.AgentSet.Add(Ag);

                    Ag = new Agent()
                    {
                        Name = "Bayo",
                        Code = "002"
                    };
                    _context.AgentSet.Add(Ag);
                    Ag = new Agent()
                    {
                        Name = "Janta",
                        Code = "003"
                    };
                    _context.AgentSet.Add(Ag);

                    _context.SaveChanges();

                }

                if (!_context.BerthSet.Any())
                {
                    var Be = new Berth()
                    {
                        Name = "NNPC",
                        Code = "NN"
                    };
                    _context.BerthSet.Add(Be);

                    Be = new Berth()
                    {
                        Name = "NigerDock",
                        Code = "NGR"
                    };
                    _context.BerthSet.Add(Be);

                    _context.SaveChanges();
                }

                if (!_context.InspectorSet.Any())
                {
                    var Ins = new Inspector()
                    {
                        Name = "Abubakar Suleiman",
                        Code = "I002"
                    };
                    _context.InspectorSet.Add(Ins);

                    Ins = new Inspector()
                    {
                        Name = "Emmanuel Iwu",
                        Code = "I003"
                    };
                    _context.InspectorSet.Add(Ins);

                    _context.SaveChanges();
                }


                if (!_context.PortSet.Any())
                {
                    var Pr = new Port()
                    {
                        Name = "Calabar",
                        Code = "P002"
                    };
                    _context.PortSet.Add(Pr);

                    Pr = new Port()
                    {
                        Name = "Lagos",
                        Code = "P003"
                    };
                    _context.PortSet.Add(Pr);

                    _context.SaveChanges();
                }

                if (!_context.VesselSet.Any())
                {
                    var Ve = new Vessel()
                    {
                        Name = "Voyager",
                        Code = "002"
                    };
                    _context.VesselSet.Add(Ve);

                    Ve = new Vessel()
                    {
                        Name = "TORM FREYA",
                        Code = "003"
                    };
                    _context.VesselSet.Add(Ve);

                    _context.SaveChanges();
                }

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

    }
}
