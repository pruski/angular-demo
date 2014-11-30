angular.module('utils').factory('service.time', [

function(){
    'use strict';

    /*
        This is naive implementation, as well as sending time as "HH:MM:SS" string.
        There are libraries date/time oriented (eg. moment.js),
        so there was no point in reimplementing it.
    */

    function getDateFromHMS(hms) {
        var parts = hms.split(":"),
            date = new Date();

        if(parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1] || isNaN(parts[2]))) {
            throw new Error("Time service: invalid data");
        }

        date.setHours(parts[0]);
        date.setMinutes(parts[1]);
        date.setSeconds(parts[2]);

        if(date < Date.now()) {
            date.setDate(date.getDate() + 1);
        }

        return date;
    }

    return {
        getDuration: function (startTime, endTime) {
            var startDate = getDateFromHMS(startTime),
                endDate = getDateFromHMS(endTime);

            var diff =  new Date(endDate.getTime() - startDate.getTime());
            return diff.getUTCHours() + " hours, " + diff.getUTCMinutes() + " minutes";
        }
    };
}]);