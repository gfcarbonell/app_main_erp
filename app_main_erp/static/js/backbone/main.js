/*
 * Module dependencies
 */

var $ 			   = require("jquery");
var Backbone 	   = require("backbone");
var Router         = require("./routers/router");


$(() => {
    var router = new Router();
    Backbone.history.start({pushState: true});
});

