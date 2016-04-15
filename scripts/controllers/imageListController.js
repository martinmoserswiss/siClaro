siClaro.controller('imageListController', function($scope, ImagesDataService) {

    // First we just load test images...
    $scope.stock = ImagesDataService.getTestImages();
    $scope.provided = [];

    $scope.loadMore = function() {
      var length = $scope.provided.length;
      for(var i = 0; i <= 2; i++) {
        if($scope.stock.length - 1 >= ($scope.provided.length + i)) {
          var element = $scope.stock[length+i];
          $scope.provided.push(element);
        }
      }
    };
});
