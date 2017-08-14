using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using todo_dotnet.Models;
using todo_dotnet.Database;


namespace todo_dotnet.Controllers
{
  public class TestController : Controller
  {
    private readonly ApplicationDbContext _context;

    public TestController(ApplicationDbContext context)
    {
      _context = context;
    }

    public IActionResult Create(Test test)
    {
      _context.TestRecords.Add(test);
      _context.SaveChanges();
      return RedirectToAction("Index");
    }

    public IActionResult Index()
    {
      var model = _context.TestRecords.ToList();
      return View(model);
    }
  }

}