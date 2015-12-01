var mbApp = angular.module('routeApp', ['ngRoute']);

mbApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl'
    }).when('/our_macarons', {
        templateUrl: 'pages/our_macarons.html',
        controller: 'mainCtrl'
    }).when('/gifts_parties', {
        templateUrl: 'pages/gifts_parties.html',
        controller: 'mainCtrl'
    }).when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactCtrl'
    }).otherwise({
            redirectTo: '/'
        }
    );
});

mbApp.controller('mainCtrl', function($scope){
    this.nav = [{
        title: 'Welcome',
        loc: '#/'
    }, {
        title: 'Our Macarons',
        loc: '#/our_macarons'
    }, {
        title: 'Gifts Parties',
        loc: '#/gifts_parties'
    },{
        title: 'Contact',
        loc: '#/contact'
    }];
}).controller('ourCtrl', function($scope) {

}).controller('giftsCtrl', function($scope) {

}).controller('contactCtrl', function($scope){
    this.list = [
        'Monday - Friday | 10am - 9pm',
        'Saturday | 10am - 8pm',
        'Sunday | 11am - 7pm',
        'closed Thanksgiving Day, Christmas Day and Easter Day'
    ];
});
