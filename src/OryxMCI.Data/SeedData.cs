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
                if (!_context.Agent.Any())
                {
                    var Ag = new Agent()
                    {
                        Name = "Hakeem",
                        Code = "001"
                    };

                    _context.Agent.Add(Ag);

                    Ag = new Agent()
                    {
                        Name = "Bayo",
                        Code = "002"
                    };
                    _context.Agent.Add(Ag);
                    Ag = new Agent()
                    {
                        Name = "Janta",
                        Code = "003"
                    };
                    _context.Agent.Add(Ag);

                    _context.SaveChanges();

                }

                if (!_context.Berth.Any())
                {
                    var Be = new Berth()
                    {
                        Name = "NNPC",
                        Code = "NN"
                    };
                    _context.Berth.Add(Be);

                    Be = new Berth()
                    {
                        Name = "NigerDock",
                        Code = "NGR"
                    };
                    _context.Berth.Add(Be);

                    _context.SaveChanges();
                }

                if (!_context.Inspector.Any())
                {
                    var Ins = new Inspector()
                    {
                        Name = "Abubakar Suleiman",
                        Code = "I002"
                    };
                    _context.Inspector.Add(Ins);

                    Ins = new Inspector()
                    {
                        Name = "Emmanuel Iwu",
                        Code = "I003"
                    };
                    _context.Inspector.Add(Ins);

                    _context.SaveChanges();
                }


                if (!_context.Port.Any())
                {
                    var Pr = new Port()
                    {
                        Name = "Calabar",
                        Code = "P002"
                    };
                    _context.Port.Add(Pr);

                    Pr = new Port()
                    {
                        Name = "Lagos",
                        Code = "P003"
                    };
                    _context.Port.Add(Pr);

                    _context.SaveChanges();
                }

                if (!_context.Vessel.Any())
                {
                    var Ve = new Vessel()
                    {
                        Name = "Voyager",
                        Code = "V002"
                    };
                    _context.Vessel.Add(Ve);

                    Ve = new Vessel()
                    {
                        Name = "TORM FREYA",
                        Code = "V003"
                    };
                    _context.Vessel.Add(Ve);

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
