require.config({
    //baseUrl: ''
    paths: {
        'knockout': '../bower_components/knockout.js/knockout',
        'knockout.validation': '../bower_components/knockout-validation/dist/knockout.validation',
        'respond': '../bower_components/respond/dest/respond.min',
        'sammy': '../bower_components/sammy/lib/sammy',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'jquery': '../bower_components/jquery/jquery',
        'jquery.validation': '../bower_components/jquery.validation/dist/jquery.validate',
        'jquery.unobtrusive.validation': '../bower_components/Microsoft.jQuery.Unobtrusive.Validation/jquery.validate.unobtrusive',
        'jquery.unobtrusive.ajax': '../bower_components/Microsoft.jQuery.Unobtrusive.Ajax/jquery.unobtrusive-ajax',
        'requirejs': '../bower_components/requirejs/require'
    },
    shim: {
        'bootstrap': ['jquery'],
        'respond': ['bootstrap'],
        'jquery.validation': [],
        'jquery.unobtrusive.validation': ['jquery', 'jquery.validation'],
        'jquery.unobtrusive.ajax': ['jquery'],
        'knockout.validation': ['knockout']
    }
})