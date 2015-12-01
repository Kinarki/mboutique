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
        controller: 'mainCtrl'
    }).otherwise({
            redirectTo: '/'
        }
    );
});

mbApp.controller('mainCtrl', function(){
    this.nav = [{
        title: 'home',
        loc: '#/'
    }, {
        title: 'our_macarons',
        loc: '#/our_macarons'
    }, {
        title: 'gifts_parties',
        loc: '#/gifts_parties'
    },{
        title: 'contact',
        loc: '#/contact'
    }];
});
