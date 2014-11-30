angular.module('trainList').directive('trainList', function(){
   'use strict';

    return {
        restrict    : 'A',
        replace     : true,
        priority    : 1,
        controller  : 'trainListCtrl',
        templateUrl : 'templates/train/train-list/train-list.html',
        scope: {

        }
    };
});

