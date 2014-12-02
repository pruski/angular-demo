describe("Train directive", function () {
    var $compile,
        $rootScope,
        Train,
        trains,
        collectionData,
        trainInstance;

    beforeEach(function () {
        module('demoApp');
        module('train');

        inject(function(_$rootScope_, _$compile_, trainModel, trainCollection){
            $compile      = _$compile_;
            $rootScope    = _$rootScope_;
            Train         = trainModel;
            trains        = trainCollection;
            trainInstance = new Train({
                "order": 0,
                "originStation": "Brighton",
                "destinationStation": "London Victoria",
                "operator": "Southern Trains",
                "startTime": "23:50:00",
                "arrivalTime": "01:00:00"
            });

            collectionData = [trainInstance];
        });

        spyOn(trains, 'fetchTrains').and.callFake(angular.noop);
        spyOn(trains, 'getTrains').and.callFake(function(){
            return collectionData;
        });
    });

    it("should render Train module", function(done){
        var element;

        element = $compile(angular.element('<train></train>'))($rootScope);

        $rootScope.$digest();

        setTimeout(function(){
            expect(element.html()).toContain('<h1>TrainList</h1>');
            expect(element.find('ul').css('display')).toBe('block');
            expect(element.find('dl').css('display')).toBe('none');

            done();

        }, 100);
    });

    it("should hide Train list and reveal Train details", function(done){
        var element;

        element = $compile(angular.element('<train></train>'))($rootScope);
        $rootScope.$digest();

        setTimeout(function(){
            element.find('.train-list-item').click();

            setTimeout(function(){
                expect(element.find('ul').css('display')).toBe('none');
                expect(element.find('dl').css('display')).toBe('block');

                done();

            }, 400);
        }, 100);
    });

    it("should hide Train detail and reveal Train list", function(done){
        var element;

        trains.select(trainInstance);
        element = $compile(angular.element('<train></train>'))($rootScope);
        $rootScope.$digest();

        setTimeout(function(){
            element.find('.train-not-selected').css({display: 'none', opacity: 0, top: '-10px'});
            element.find('.train-selected').css({display: 'block', opacity: 1, top: '0px'});
            element.find('.btn-back').click();

            setTimeout(function(){
                expect(element.find('ul').css('display')).toBe('block');
                expect(element.find('dl').css('display')).toBe('none');

                done();

            }, 400);
        }, 100);
    });
});