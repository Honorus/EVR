using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class Bra
    {
        public string Filename { get; set; }
        public string FileUrl { get; set; }
        public string Extension { get; set; }
        public int Rating { get; set; }
    }
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
        public ActionResult DeleteImage(string imgSrc)
        {
            var filePath = Server.MapPath("~" + imgSrc);
            System.IO.File.Delete(filePath);
            //string path = Path.Combine(, "Content", "image", file.FileName);
            //file.

            return RedirectToAction("NewGallery");
        }

        public JsonResult ListImage()
        {
            string path = Path.Combine(Server.MapPath("~"), "Content", "image");
            string[] filenames = Directory.GetFiles(path);
            var ap = filenames.Select(x => Path.GetFileName(x));
            //string serverPath = Path.Combine(Server.UrlPathEncode)
           
            var a = ap.Select(name => Url.Content("~/Content/Image/" + name));
            Random rand = new Random();
            var b = a.Select(x => new Bra {
                FileUrl = x,
                Filename = Path.GetFileName(x),
                Extension = Path.GetExtension(x),
                Rating =  rand.Next(0, 5)});
            
            return Json(b, JsonRequestBehavior.AllowGet);
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