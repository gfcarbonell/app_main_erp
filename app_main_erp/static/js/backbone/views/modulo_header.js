/*
 * Module dependencies
 */
var React          = require("react");
var ReactDOM       = require("react-dom");
var $           = require("jquery");
var _           = require("underscore");
var Backbone 	= require("backbone");
Backbone.$ = $;
var ModuloHeaderComponent = require("./../../components/modulo_header");


class ModuloHeaderView extends Backbone.View
{
	initialize (options) {
	    this.options = options || {};
	}
    render() 
	{
		console.log("Modulo Avatar");
		ReactDOM.render(<ModuloHeaderComponent css={this.options.css}/>, document.getElementById("modulo_avatar"));
		return this;
    }
}
module.exports = ModuloHeaderView;