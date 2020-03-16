using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorTutorialDev01.Models;

namespace RazorTutorialDev01.Data {
    public class RazorTutorialDev01Context : DbContext {
        public RazorTutorialDev01Context(DbContextOptions<RazorTutorialDev01Context> options)
            : base(options) {
        }

        public DbSet<RazorTutorialDev01.Models.Movie> Movie { get; set; }
    }
}
