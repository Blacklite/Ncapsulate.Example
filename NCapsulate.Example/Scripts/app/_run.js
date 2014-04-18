define(['knockout',
    './app.datamodel',
    './app.viewmodel',
    './common',
    './home.viewmodel',
    './library'
],
    function (ko, dataModel, app) {
        app.initialize();

        // Activate Knockout
        ko.validation.init({ grouping: { observable: false } });
        ko.applyBindings(app);

        // add some comment here
    });
