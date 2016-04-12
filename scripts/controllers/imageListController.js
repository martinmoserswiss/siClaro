siClaro.controller('imageListController', function($scope) {
    $scope.imagesStock = ["portugal/p14-1-10.jpg", "baja/P1000394.jpg", "baja/P1000432.jpg", "baja/P1010144.jpg", "baja/P1010197.jpg", "baja/P1010287.jpg", "london/l1.jpg", "london/l2.jpg"];
    $scope.images = [];
    $scope.loadMore = function() {
      var length = $scope.images.length;
      for(var i = 0; i <= 2; i++) {
        if($scope.imagesStock.length - 1 >= ($scope.images.length + i)) {
          var element = $scope.imagesStock[length+i];
          console.log(element);
          $scope.images.push(element);
        }
      }
    };
});
