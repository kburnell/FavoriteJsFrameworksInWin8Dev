
$(function () {

    var listOfData = ko.observableArray();
    var observableProperties = ["year", "make", "model"];

    var rawData = getSomeDataFromSomeService;
    setupObservableProps(rawData, observableProperties);
    listOfData.push(rawData);

    ko.applyBindings(listOfData);


});


function getSomeDataFromSomeService() {
    
    return [
            { id: 1, year: 2012, make: "Ferrari", model: "California" },
            { id: 2, year: 2012, make: "Ferrari", model: "458 Italia" },
            { id: 3, year: 2012, make: "Lamborghini", model: "Aventador" },
            { id: 4, year: 2012, make: "Lamborghini", model: "Gallardo LP-570" },
            { id: 5, year: 2012, make: "Porsche", model: "911 GT3" },
            { id: 6, year: 2012, make: "McLaren", model: "MP14-12C" },
            { id: 7, year: 2012, make: "Koenigsegg", model: "CCX" }
    ];
}

function setupObservableProps(obj, observableProperties) {
    $.each(observableProperties, function(prop) {
        obj[prop] = ko.observable(obj[prop]);
    });
}