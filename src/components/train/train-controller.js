angular.module('train').controller('trainCtrl', [
    '$scope',
    'collections.train',

function($scope, trainList){
     'use strict';

    $scope.trainList = trainList;
}]);