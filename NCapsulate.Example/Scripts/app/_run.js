define(['knockout', './app.datamodel', './app.viewmodel', './common', './home.viewmodel', './library'], function(ko) {
    app.initialize();

    // Activate Knockout
    ko.validation.init({ grouping: { observable: false } });
    ko.applyBindings(app);
});
