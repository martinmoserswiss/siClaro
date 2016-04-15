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
            subtitle: 'Trip of Peace',
            year: '2013',
            path : "baja/P1000432.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Bruedi Love',
            year: '2013',
            path : "baja/P1010144.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Sunset',
            year: '2013',
            path : "baja/P1010197.jpg",
        },
        {
            title : 'Baja',
            subtitle: 'Best place ever',
            year: '2013',
            path : "baja/P1010287.jpg",
        },
        {
            title : 'London',
            subtitle: 'Chips, football and beer',
            year: '2013',
            path : "london/l1.jpg",
        },
        {
            title : 'London',
            subtitle: 'Great time',
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
