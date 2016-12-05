/*
 * Module dependencies
 */
var React = require ("react");
var $ 	  = require ("jquery");
require("materialize");
var ModuloTituloComponent = require("./modulo_titulo");
var ModuloAvatarComponent = require("./modulo_avatar");
var uid = require("uid");


class ModuloHeader extends React.Component 
{

	constructor(props)
	{
		super(props);
		let avatar = {
			"imagen": "https://ee5817f8e2e9a2e34042-3365e7f0719651e5b8d0979bce83c558.ssl.cf5.rackcdn.com/python.png",
			"nombre": "Este es un titulo"
		}
		let heading = {"titulo":"Este es un titulo"}

		this.state = {avatar:avatar, heading:heading}
	}

	render() 
	{
	    return  <ModuloAvatarComponent key = {uid()} avatar={this.state.avatar}/>
				<ModuloTituloComponent key = {uid()} heading={this.state.heading}/>
	}
}
module.exports = ModuloHeader;