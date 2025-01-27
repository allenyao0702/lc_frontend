/**
 * Created by Yuan on 7/3/2015.
 */
'use strict';

angular.module('lookchic.results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/results', {
            templateUrl: 'views/lc-search-results/lc-search-results.html',
            controller: 'resultsCtrl'
        });
    }])
    .controller('resultsCtrl', function($scope) {
        $scope.layout = list;
        $scope.results = [
            {
                productname: 'Manolo Blahnik Hangisi Satin Pump',
                price: '$965',
                link: '#',
                imgurl: 'images/test_img/sample4.jpg',
                desc: '40% Off Select'
            },
            {
                productname: 'Manolo Blahnik Hangisi Satin Pump',
                price: '$965',
                link: '#',
                imgurl: 'images/test_img/sample4.jpg',
                desc: '40% Off Select'
            }
        ];
    });