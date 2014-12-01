describe("Train list item directive", function () {
    var $compile,
        $rootScope,
        Train;

    beforeEach(function () {
        module('demoApp');
        module('train');

        inject(function(_$rootScope_, _$compile_, trainModel){
            $compile   = _$compile_;
            $rootScope = _$rootScope_;
            Train      = trainModel;
        });
    });

    it("should render Train list item", function(){
        var element;

        $rootScope.train = new Train({
            "order": 0,
            "originStation": "Brighton",
            "destinationStation": "London Victoria",
            "operator": "Southern Trains",
            "startTime": "23:50:00",
            "arrivalTime": "01:00:00"
        });

        element = $compile(angular.element('<div train-list-item="train"></div>'))($rootScope);

        $rootScope.$digest();

        expect(element.html()).toContain('<h4 class="ng-binding">Brighton</h4>');
        expect(element.html()).toContain('<h6 class="ng-binding">23:50:00</h6>');
    });
});