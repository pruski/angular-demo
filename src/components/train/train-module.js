angular.module('train', [
    'trainDetails',
    'trainList'
]);

angular.module('train').directive('train', function(){
   'use strict';

    return {
        restrict    : 'E',
        replace     : true,
        controller  : 'trainCtrl',
        templateUrl : 'templates/train/train.html',

        link: trainLink
    };

    function trainLink(scope, element) {
        var listSelector    = '.train-not-selected',
            detailsSelector = '.train-selected';

        scope.$watch(isTrainSelected, trainSelected);

        function isTrainSelected() {
            return scope.trainList.getSelected() !== null;
        }

        function trainSelected(newVal, oldVal) {
            if(newVal === true) {
                reveal(detailsSelector, listSelector);

            } else {
                reveal(listSelector, detailsSelector);
            }
        }

        function reveal(show, hide) {
            element.find(hide).velocity({
                opacity: 0,
                top: -10

            }, {
                duration: 0,
                display : "none",
                complete: function () {
                    element.find(show).velocity({
                        opacity: 1,
                        top: 0

                    }, {
                        display: "block"
                    });
                }
            });
        }
    }
});

angular.module('train').controller('trainCtrl', [
    '$scope',
    'collections.train',

function($scope, trainList){
     'use strict';

    $scope.trainList = trainList;
}]);