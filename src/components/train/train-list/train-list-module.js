angular.module('trainList', [
    'trainListItem'
]);

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

angular.module('trainList').controller('trainListCtrl', [
    '$scope',
    'collections.train',

function($scope, trainList){
    'use strict';

    $scope.trainList = trainList;

    // initialisation
    $scope.trainList.fetchTrains();
}]);