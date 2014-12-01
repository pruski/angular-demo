describe("Train model", function () {
    var Train;

    beforeEach(function () {
        Train = angular.injector(['ng', 'utils', 'train']).get('models.train');
    });

    it("should create a Train instance", function () {
        var train = new Train({
                "order": 0,
                "originStation": "Brighton",
                "destinationStation": "London Victoria",
                "operator": "Southern Trains",
                "startTime": "23:50:00",
                "arrivalTime": "01:00:00"
            });

        expect(train.order).toEqual(0);
        expect(train.originStation).toEqual("Brighton");
        expect(train.destinationStation).toEqual("London Victoria");
        expect(train.operator).toEqual("Southern Trains");
        expect(train.startTime).toEqual("23:50:00");
        expect(train.arrivalTime).toEqual("01:00:00");
        expect(train.duration).toEqual("1 hours, 10 minutes");
    });

    it("should throw an error given null as start or arrival time parameter", function () {
        expect(function(){
            new Train({
                "startTime": null,
                "arrivalTime": null
            });

        }).toThrow();
    });

    it("should throw an error given incorrect start or arrival time parameter", function () {
        expect(function(){
            new Train({
                "startTime": "wec",
                "arrivalTime": "xwecdw"
            });
            
        }).toThrow();
    });
});

