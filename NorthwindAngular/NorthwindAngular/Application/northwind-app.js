var app = angular.module('northwindApp', []);
app.service('nwService', function ($http) {
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
    this.UpdateProduct = function (productPar) {
        var product = $http({
            method: 'Post',
            url: '/Products/Guncel',
            data: {productPar}
        }).then(function (response) {
            return response.data;
        });
        return product;

    }
});
app.controller('pController', function ($scope, nwService) {
    $scope.GetAllProducts = function () {
        nwService.getAllProducts().then(function (result) {
            $scope.plist = result.plist;
        });
    };
    $scope.GetByProductID = function (ProductID) {
        nwService.getByProductID(ProductID).then(function (result) {
            $scope.product = result.product;

        })

    };
    $scope.UpdateProduct = function (product) {
        nwService.updateProduct(product).then(function (result) {
            $scope.Msg = result.ProductName + "Güncellendi";
            $scope.getAllProducts();

        })

    };


});