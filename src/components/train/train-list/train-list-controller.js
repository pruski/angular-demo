angular.module('trainList').controller('trainListCtrl', [
    '$scope',
    'trainCollection',

function($scope, trainList){
    'use strict';

    $scope.trainList = trainList;

    // initialisation
    $scope.trainList.fetchTrains();
}]);