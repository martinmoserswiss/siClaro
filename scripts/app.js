var siClaro = angular.module('siClaro', ['ngRoute','infinite-scroll']);

siClaro.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/imageList.html',
        controller: 'imageListController'
    })
});
