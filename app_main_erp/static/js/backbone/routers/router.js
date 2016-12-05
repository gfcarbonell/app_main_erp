/*
 * Module dependencies
 */
var $        = require("jquery");
var _        = require("underscore");
var Backbone = require("backbone");
Backbone.$ = $;
var ModuloHeaderView = require("./../views/modulo_header");

class Router extends Backbone.Router
{
    initialize () 
    {
      this._bindRoutes();
    }

    routes ()
    {
        return {
        	  ""                                         :"index",
          };
    }

    index()
    {
      var modulo_header_view = new ModuloHeaderView({el:$("#modulo_avatar")});
      modulo_header_view.render();
      //Efecto Materialize - MaterialBox
      $(".container-modulo-avatar-imagen").materialbox();
    }
}

module.exports = Router;

