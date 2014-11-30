angular.module('trainDetails').directive('trainDetails', function(){
   'use strict';

    return {
        restrict    : 'A',
        replace     : true,
        templateUrl : 'templates/train/train-details/train-details.html',
        scope: {
            data: '=trainDetails'
        }
    };
});