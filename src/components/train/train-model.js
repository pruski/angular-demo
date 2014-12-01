angular.module('train').factory('trainModel', [
    'service.time',

function(time){
    'use strict';

    function Train(data) {
        angular.extend(this, data);
        this.duration = time.getDuration(this.startTime, this.arrivalTime);
    }

    return Train;
}]);