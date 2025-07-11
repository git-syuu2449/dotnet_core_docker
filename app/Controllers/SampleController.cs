using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace MvcMovie.Controllers;

public class SampleController : Controller
{
    private readonly ILogger<SampleController> _logger;

    public SampleController(ILogger<SampleController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}