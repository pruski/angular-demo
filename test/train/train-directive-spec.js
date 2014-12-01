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
        var element,
            compiledHtml;

        element = $compile(angular.element('<train></train>'))($rootScope);

        $rootScope.$digest();

        setTimeout(function(){
            compiledHtml = element.html();
            expect(compiledHtml).toContain('<h1>TrainList</h1>');
            expect(compiledHtml).toContain('<ul class="train-not-selected train-list ng-isolate-scope" train-list="" style="display: block; opacity: 1; top: 0px;">');
            expect(compiledHtml).toContain('<dl class="train-selected train-details dl-horizontal ng-isolate-scope" train-details="trainList.getSelected()" style="opacity: 0; top: -10px; display: none;">');

            done();

        }, 450);
    });

    it("should hide Train list and reveal Train details", function(done){
        var element,
            compiledHtml;

        element = $compile(angular.element('<train></train>'))($rootScope);
        $rootScope.$digest();

        setTimeout(function(){
            element.find('.train-list-item').click();

            setTimeout(function(){
                compiledHtml = element.html();
                expect(compiledHtml).toContain('<ul class="train-not-selected train-list ng-isolate-scope" train-list="" style="display: none; opacity: 0; top: -10px;">');
                expect(compiledHtml).toContain('<dl class="train-selected train-details dl-horizontal ng-isolate-scope" train-details="trainList.getSelected()" style="opacity: 1; top: 0px; display: block;">');

                done();

            }, 450);
        }, 450);
    });
});