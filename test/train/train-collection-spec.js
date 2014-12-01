describe("Train collection", function () {
    var $httpBackend,
        trains,
        backendResponse = [{
            "order": 0,
            "originStation": "Brighton",
            "destinationStation": "London Victoria",
            "operator": "Southern Trains",
            "startTime": "23:50:00",
            "arrivalTime": "01:00:00"
        }];

    beforeEach(function(){
        module('ngResource');
        module('utils');
        module('train');

        inject(function(_$httpBackend_, _trainCollection_){
            $httpBackend =_$httpBackend_;
            $httpBackend.when('GET', '/journeys.json').respond(backendResponse);
            trains = _trainCollection_;
        });

        jasmine.addMatchers({
            toEqualTrains: function() {
                return {
                    compare: function (actual, expected) {
                        var result = {};

                        result.pass = JSON.stringify(actual) === JSON.stringify(expected);

                        if(result.pass) {
                            result.message = "Trains collections are equal";

                        } else {
                            result.message = "Trains collections are not equal";
                        }

                        return result;
                    }
                }
            }
        });

    });

    describe("initial value", function () {
        it("of selected train should be null", function () {
            expect(trains.getSelected()).toBeNull();
        });

        it("of train list should be empty array", function () {
            expect(trains.getTrains()).toEqual([]);
        });
    });


    describe("modified value", function () {
        it("of selected train should be {test: 'test'}", function(){
            trains.select({test: 'test'});

            expect(trains.getSelected()).toEqual({test: 'test'});
        });

        it("of train list should be one-element array", function() {
            trains.fetchTrains();

            $httpBackend.flush();

            expect(trains.getTrains()).toEqualTrains([
                {
                    order: 0,
                    originStation: 'Brighton',
                    destinationStation: 'London Victoria',
                    operator: 'Southern Trains',
                    startTime: '23:50:00',
                    arrivalTime: '01:00:00',
                    duration: '1 hours, 10 minutes'
                }
            ]);
        });
    });



});