angular.module('trainListItem').directive('trainListItem', function(){
   'use strict';

    return {
        restrict    : 'A',
        replace     : true,
        controller: 'trainCtrl',
        templateUrl : 'templates/train/train-list/train-list-item/train-list-item.html',
        scope: {
            data: '=trainListItem'
        }
    };
});