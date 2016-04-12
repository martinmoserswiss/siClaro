siClaro.controller('ImageListCtrl', function ($scope) {

    $scope.images = ["portugal/p14-1-10.jpg", "baja/P1000394.jpg", "baja/P1000432.jpg", "baja/P1010144.jpg", "baja/P1010197.jpg", "baja/P1010287.jpg", "london/l1.jpg", "london/l2.jpg"];
    $scope.loadMore = function() {
        var last = $scope.images[$scope.images.length - 1];
        for(var i = 1; i <= 3; i++) {
            $scope.images.push(last + i);
        }
    };

});
