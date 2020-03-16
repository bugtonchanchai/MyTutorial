using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorTutorialDev01.Data;
using RazorTutorialDev01.Models;

namespace RazorTutorialDev01.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly RazorTutorialDev01.Data.RazorTutorialDev01Context _context;

        public IndexModel(RazorTutorialDev01.Data.RazorTutorialDev01Context context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; }

        public async Task OnGetAsync()
        {
            Movie = await _context.Movie.ToListAsync();
        }
    }
}
