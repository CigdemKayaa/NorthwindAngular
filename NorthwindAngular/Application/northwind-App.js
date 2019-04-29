var app = angular.module('northwindApp', []);
app.service('nService', function ($http) {
    this.getAllProducts = function () {
        var model = $http({
            method: 'Get',
            url: '/Products/Liste'
        }).then(function (response) {
            return response.data;
        });
        return model;
    };
    this.getByProductID = function (ProductID) {
        var product = $http({
            method: 'GET',
            url: '/Products/Detay',
            params: { id: ProductID }

        }).then(function (response) {
            return response.data;
    });
return product;
    };
    this.updateProduct = function (product) {
        var productx = $http({
            method: 'POST',
            url: '/Products/Guncel',
            data: product

        }).then(function (response) {
            return response.data;

        });
        return productx;
    };
    this.createProduct = function (product) {
        var productx = $http({
            method: 'POST',
            url: '/Products/Ekle',
            data: product
        }).then(function (response) {
            return response.data;

        });
        return productx;
    };
    this.deleteProduct = function (product) {
        var productx = $http({
            method: 'POST',
            url: '/Products/Sil',
            data: product
        }).then(function (response) {
            return response.data;

        });
        return productx;
    };
});
app.controller('productsController', function ($scope, nService) {
    $scope.GetAllProducts = function () {
        nService.getAllProducts().then(function (result) {
            $scope.plist = result.plist;
            $scope.clist = result.clist;
            $scope.slist = result.slist;
            $scope.detShow = false;

        });

    }
    $scope.GetByProductID = function (ProductID) {
        nService.getByProductID(ProductID).then(function (result) {
            $scope.product = result.products;
            $scope.detShow = true;
        });

    }
    $scope.UpdateProduct = function (product) {
        nService.updateProduct(product).then(function (result) {
            $scope.msg = result.ProductName + "Güncellendi"
            $scope.GetAllProducts();
        });

    };
    $scope.CreateProduct = function (product) {
        nService.createProduct(product).then(function (result) {
            $scope.msg = result.ProductName + "Eklendi"
            $scope.GetAllProducts();
        });

    };
    $scope.DeleteProduct = function (product) {
        nService.deleteProduct(product).then(function (result) {
            $scope.msg = result.ProductName + "Silindi"
            $scope.GetAllProducts();
        });
    };
});
