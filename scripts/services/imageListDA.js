siClaro.factory('ImagesDataService', function() {

    var srv = {};

    srv._testImages = [
        {
            title : 'Portugal',
            subtitle: 'Ericeira',
            year: '2014',
            path : "portugal/p14-1-10.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Peace Trip',
            year: '2013',
            path : "baja/P1000394.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Night place',
            year: '2013',
            path : "baja/P1000432.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Fishermen\'s place',
            year: '2013',
            path : "baja/P1010144.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Mar de Cortés',
            year: '2013',
            path : "baja/P1010197.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'DF',
            year: '2013',
            path : "baja/P1010287.jpg",
        },
        {
            title : 'Liverpool',
            subtitle: 'Light\'s in a bar',
            year: '2013',
            path : "london/l1.jpg",
        },
        {
            title : 'London',
            subtitle: 'I tell you, that\'s not like you think about',
            year: '2013',
            path : "london/l2.jpg",
        },
    ];

    // Service implementation
    srv.getTestImages = function () {
        return angular.copy(srv._testImages);
    };

    // Public API
    return {
        getTestImages: function () {
            return srv.getTestImages();
        }
    };

});
