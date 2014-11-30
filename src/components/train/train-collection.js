angular.module('train').factory('collections.train', [
    '$resource',
    'models.train',

function($resource, Train){
    'use strict';

    var trains = [],
        selectedTrain = null,
        trainsRes = $resource('/journeys.json', {}, {
            get: {
                method:'get',
                isArray: true
            }
        });

    return {
        getTrains: function() {
            return trains;
        },

        fetchTrains: function () {
            trainsRes.get({}, function (data) {
                angular.forEach(data, function (item) {
                    trains.push(new Train(item));
                });
            });
        },

        select: function (train) {
            selectedTrain = train;
        },

        getSelected: function() {
            return selectedTrain;
        }
    };
}]);