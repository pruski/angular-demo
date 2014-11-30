describe("Time service", function () {
    var timeService;

    beforeEach(function(){
        timeService = angular.injector(['utils']).get('service.time');
    });

    it("should return a string '1 hours, 13 minutes' given \"00:00:00\" and \"01:13:00\"", function () {
        expect(timeService.getDuration("00:00:00", "01:13:00")).toEqual("1 hours, 13 minutes");
    });

    it("should return a string '0 hours, 50 minutes' given \"23:30:00\" and \"00:20:00\"", function () {
        expect(timeService.getDuration("23:30:00", "0:20:00")).toEqual("0 hours, 50 minutes");
    });

    it("should throw an error given invalid data", function () {
        expect(function(){
            timeService.getDuration("sd:dsq", "00:00:00");
        }).toThrow();
    });

    it("should throw an error given null", function () {
        expect(function(){
            timeService.getDuration(null, null);
        }).toThrow();
    });
});