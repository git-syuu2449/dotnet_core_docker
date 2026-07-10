using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app.Data;
using app.Models;

namespace app.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleApiController : ControllerBase
    {
        private readonly AppDbContext _db;
        public SampleApiController(AppDbContext db) => _db = db;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SampleItem>>> Get()
        {
            return await _db.SampleItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SampleItem>> GetById(int id)
        {
            var item = await _db.SampleItems.FindAsync(id);
            if (item == null) return NotFound();
            return item;
        }

        [HttpPost]
        public async Task<ActionResult<SampleItem>> Post(SampleItem item)
        {
            _db.SampleItems.Add(item);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = item.Id }, item);
        }
    }
}
