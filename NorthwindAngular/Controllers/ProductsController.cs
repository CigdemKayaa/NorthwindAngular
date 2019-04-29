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
        [HttpGet]
        public ActionResult Liste()
        {
            db.Configuration.LazyLoadingEnabled = false;
            ProductModel model = new ProductModel();
            model.plist = db.Products.ToList();
            model.clist = db.Categories.Select(x => new DTOs.CategoriesDTO
            {
                CategoryID=x.CategoryID,
                CategoryName=x.CategoryName

            }).ToList();
            model.slist = db.Suppliers.Select(x => new DTOs.SupplierDTO
            {
                SupplierID=x.SupplierID,
                CompanyName=x.CompanyName

            }).ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult Detay(int id)
        {
            db.Configuration.LazyLoadingEnabled = false;
            ProductModel model = new ProductModel();
            model.products = db.Products.Find(id);

            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Guncel(Products product)
        {

            db.Configuration.LazyLoadingEnabled = false;
            db.Entry(product).State = System.Data.Entity.EntityState.Modified;

            db.SaveChanges();
            return Json(product, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult Ekle(Products product)
        {
            db.Entry(product).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();
            return Json(product, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Sil(Products product)
        { 
          
            db.Entry(product).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();
            return Json(product, JsonRequestBehavior.AllowGet);
        }
    }
}