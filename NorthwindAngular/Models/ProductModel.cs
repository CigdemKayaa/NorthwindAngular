﻿using NorthwindAngular.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NorthwindAngular.Models
{
    public class ProductModel
    {
        public List<Products> plist{ get; set; }
        public Products products { get; set; }
        public List<SupplierDTO> slist { get; set; }
        public List<CategoriesDTO> clist { get; set; }

    }
}