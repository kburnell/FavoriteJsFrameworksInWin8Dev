
require.config({
    paths: {
        jquery: "../Scripts/jquery-2.0.3",
        knockout: "../Scripts/knockout-2.3.0",
        cars: "modules/cars"
    }
});



require(["jquery", "knockout", "cars"], function ($, ko, cars) {
    cars.getCars();

    function App() {
        this.cars = cars.cars;
        this.add = cars.add;
    }



    $(function () {

        ko.applyBindings(new App());

    });
   
});