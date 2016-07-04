siClaro.factory('ImagesDataService', function() {

    var srv = {};

    srv._testImages = [
        {
            title : 'Brazil',
            subtitle: 'Morro de São Paulo',
            year: '2016',
            path : "brazil/1.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Stella Maris',
            year: '2016',
            path : "brazil/2.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Itacré',
            year: '2016',
            path : "brazil/3.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Morning spirit @ Engenhoca',
            year: '2013',
            path : "brazil/4.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Salvador',
            year: '2016',
            path : "brazil/5.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'easy & relaxed',
            year: '2016',
            path : "brazil/6.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Morro de São Paulo',
            year: '2016',
            path : "brazil/7.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Caraiva',
            year: '2013',
            path : "brazil/8.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'Jungle is massiv',
            year: '2016',
            path : "brazil/9.jpg",
        },
        {
            title : 'Brazil',
            subtitle: 'You\'re welcome, come in!',
            year: '2016',
            path : "brazil/10.jpg",
        },
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
