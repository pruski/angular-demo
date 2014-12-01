angular.module('train').controller('trainCtrl', [
    '$scope',
    'trainCollection',

function($scope, trainList){
     'use strict';

    $scope.trainList = trainList;
}]);