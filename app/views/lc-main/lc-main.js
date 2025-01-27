/**
 * Created by yaoyuan on 7/2/2015.
 */
'use strict';

angular.module('lookchic.main', ['ngRoute','ngFileUpload'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'views/lc-main/lc-main.html',
        controller: 'mainCtrl'
    });
}])
.controller('mainCtrl', function($scope, $mdDialog) {
    $scope.feeds = [
        {
            postername: 'Yuan',
            avatorurl: '',
            postdate: 'June 18 2015',
            imgurl: 'images/test_img/sample4.jpg',
            desc: 'Fantastic'
        },
        {
            postername: 'Yao',
            avatorurl: '',
            postdate: 'July 2 2015',
            imgurl: 'images/test_img/sample1.jpg',
            desc: 'New Day'
        }
    ];

        $scope.showPost = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'views/lc-main/dg_post.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                hasBackdrop: true,
            })
        };
        function DialogController($scope,$rootScope, $mdDialog, $http, $location, $q, $window, Auth) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
        };
})
.controller('postCtrl', function ($scope, Upload, $timeout) {
    $scope.post={};
    $scope.$watch('files', function () {
        $scope.upload();
    });

    $scope.upload = function () {
        console.log('upload image');
        /*if (image && image.length) {
            for (var i = 0; i < image.length; i++) {
                var file = image[i];
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    fields: {
                        'username': $scope.username
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                        evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    });
                });
            }
        }*/
    };
});