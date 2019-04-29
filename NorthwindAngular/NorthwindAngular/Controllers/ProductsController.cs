using NorthwindAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NorthwindAngular.Controllers
{
    public class ProductsController : Controller
    {
        NorthwindEntities db = new NorthwindEntities();
        ProductsModel model = new ProductsModel();
        // GET: Products
        [HttpGet] 
        public ActionResult Liste()
        {
            db.Configuration.LazyLoadingEnabled = false;          
            model.plist = db.Products.ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Detay(int id)
        {
            db.Configuration.LazyLoadingEnabled = false;
            model.product= db.Products.Find(id);
            return Json(model, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Guncel(Products product)
        {
            db.Entry(product).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(product, JsonRequestBehavior.AllowGet);
        }
    }
}