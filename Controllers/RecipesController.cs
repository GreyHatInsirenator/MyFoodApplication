using Microsoft.AspNetCore.Mvc;
using MyFoodApplication.Models;

namespace MyFoodApplication.Controllers
{
    public class RecipesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GetRecipeCard([FromBody] List<Recipes> recipes)
        {
            return PartialView("", recipes);
        }
    }
}
