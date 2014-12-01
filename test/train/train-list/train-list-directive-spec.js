describe("Train list directive", function () {
    var $compile,
        $rootScope,
        Train,
        trains,
        collectionData;


    beforeEach(function () {
        module('demoApp');
        module('train');

        inject(function(_$rootScope_, _$compile_, trainModel, trainCollection){
            $compile   = _$compile_;
            $rootScope = _$rootScope_;
            Train      = trainModel;
            trains     = trainCollection;

            collectionData = [new Train({
                "order": 0,
                "originStation": "Brighton",
                "destinationStation": "London Victoria",
                "operator": "Southern Trains",
                "startTime": "23:50:00",
                "arrivalTime": "01:00:00"
            })];
        });

        spyOn(trains, 'fetchTrains').and.callFake(angular.noop);
        spyOn(trains, 'getTrains').and.callFake(function(){
            return collectionData;
        });
    });

    it("should render Train list", function(){
        var element,
            compiledHTML;

        element = $compile(angular.element('<div train-list></div>'))($rootScope);

        $rootScope.$digest();

        expect(element.html()).toContain('<li class="train-list-item clearfix ng-isolate-scope" ng-click="trainList.select(data)" ng-repeat="train in trainList.getTrains()" train-list-item="train">');
    });
});