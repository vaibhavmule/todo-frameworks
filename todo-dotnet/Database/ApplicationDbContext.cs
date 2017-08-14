using System;
using Microsoft.EntityFrameworkCore;

namespace todo_dotnet.Database
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    public DbSet<Models.Test> TestRecords { get; set; }
  }
}