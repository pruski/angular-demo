angular.module('trainList').controller('trainListCtrl', [
    '$scope',
    'collections.train',

function($scope, trainList){
    'use strict';

    $scope.trainList = trainList;

    // initialisation
    $scope.trainList.fetchTrains();
}]);