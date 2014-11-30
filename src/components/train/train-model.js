angular.module('train').service('models.train', [
    'service.time',

function(time){
    'use strict';

    function Train(data) {
        angular.extend(this, data);
        this.duration = time.getDuration(this.startTime, this.arrivalTime);
    }

    return Train;
}]);