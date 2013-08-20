define(["jquery", "knockout"], function($, ko) {

    var carsList = ko.observableArray();

    function callAFakeServiceToGetSomeCars() {
        var data = [
            { id: 1, year: 2012, make: "Ferrari", model: "California" },
            { id: 2, year: 2012, make: "Ferrari", model: "458 Italia" },
            { id: 3, year: 2012, make: "Lamborghini", model: "Aventador" },
            { id: 4, year: 2012, make: "Lamborghini", model: "Gallardo LP-570" },
            { id: 5, year: 2012, make: "Porsche", model: "911 GT3" },
            { id: 6, year: 2012, make: "McLaren", model: "MP14-12C" },
            { id: 7, year: 2012, make: "Koenigsegg", model: "CCX" }
        ];
        $.each(data, function(index,car) {
            carsList.push(car);
        });
    }
    
    function addCar() {
        var car = { id: 8, year: 2013, make: "Foo", model: "Bar" };
        carsList.push(car);
    }

    return {
        cars: carsList,
        getCars: callAFakeServiceToGetSomeCars,
        add: addCar
};

});