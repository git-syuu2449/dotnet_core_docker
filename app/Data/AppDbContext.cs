using Microsoft.EntityFrameworkCore;
using app.Models;

namespace app.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<SampleItem> SampleItems { get; set; } = null!;
    }
}
