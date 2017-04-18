using Dao.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LoadImage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult LoadImage(HttpPostedFileBase file, string filename)
        {
            string path = Path.Combine(Server.MapPath("~"), "Content", "image", filename);
            file.SaveAs(path);
            
            return View("NewGallery");
        }
        [HttpPost]
        public ActionResult DeleteImage(string imageSrc)
        {
            var filePath = Server.MapPath("~" + imageSrc);
            System.IO.File.Delete(filePath);

            return RedirectToAction("NewGallery");
        }

        public JsonResult ListImage()
        {
            string path = Path.Combine(Server.MapPath("~"), "Content", "image");
            string[] files = Directory.GetFiles(path);
            var filenames = files.Select(name => Path.GetFileName(name));
            //string serverPath = Path.Combine(Server.UrlPathEncode)
           
            var filePaths = filenames.Select(name => Url.Content("~/Content/Image/" + name));
            Random rand = new Random();
            var image = filePaths.Select(filePath => new Image {
                ImageUrl = filePath,
                ImageName = Path.GetFileName(filePath),
                Extension = Path.GetExtension(filePath),
                Rating = rand.Next(0, 5),
            });
            
            return Json(image, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Gallery()
        {
            return View();
        }

        public ActionResult NewGallery()
        {
            return View();
        }

    }
}