(function () {
    console.log(_);
    console.log(_.VERSION);
    var a = [1, 2, 3];
    debugger;
    _.each([1, 2, 3], function (item) {
        console.log(item)
    }, {"age": 12, "name": "wwmin"});
})();
