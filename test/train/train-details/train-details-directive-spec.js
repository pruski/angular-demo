describe("Train directive", function () {
    var $compile,
        $rootScope,
        $templateCache,
        Train,

        trainData = {
            arrivalTime: "01:00:00",
            destinationStation: "London Victoria",
            operator: "Southern Trains",
            order: 0,
            originStation: "Brighton",
            startTime: "23:50:00"
        };


    beforeEach(function () {
        module('demoApp');
        module('utils');
        module('train');

        inject(function(_$rootScope_, _$compile_, trainModel, _$templateCache_){
            $compile   = _$compile_;
            $rootScope = _$rootScope_;
            $templateCache = _$templateCache_;
            Train = trainModel;
        });
    });

    it("should render Train details", function(){
        var element;

        $rootScope.train = new Train(trainData);
        element = $compile(angular.element('<div train-details="train"></div>'))($rootScope);

        $rootScope.$digest();

        expect(element.html()).toContain("1 hours, 10 minutes");
    });
});