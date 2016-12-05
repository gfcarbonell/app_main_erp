/*
 * Module dependencies
 */
var React = require ("react");
var $ 	  = require ("jquery");
require("materialize");
var ModuloHeadingComponent = require("./modulo_heading");
var ModuloAvatarComponent = require("./modulo_avatar");
var uid = require("uid");


class ModuloHeader extends React.Component 
{

	constructor(props)
	{
		super(props);
		let avatar_1 = {
			"imagen": "https://ee5817f8e2e9a2e34042-3365e7f0719651e5b8d0979bce83c558.ssl.cf5.rackcdn.com/python.png",
			"nombre": "Municipalidad Distrital de San Andrés",
			"id"    : "avatar_imagen_left"
		}
		let avatar_2 = {
			"imagen": "https://ee5817f8e2e9a2e34042-3365e7f0719651e5b8d0979bce83c558.ssl.cf5.rackcdn.com/python.png",
			"nombre": "Este es un titulo",
			"id"    : "avatar_imagen_right"
		}
		let heading = {"titulo":"Municipalidad Distrital de San Andrés", "is_main":true}

		this.state = {avatar_1:avatar_1, avatar_2:avatar_2, heading:heading}
		this.classNameCSS = "container-modulo " + this.props.css
	}

	render() 
	{
	    return  <div className={this.classNameCSS}>
				    <ModuloAvatarComponent key  = {uid()} avatar={this.state.avatar_1}/>
				    <ModuloHeadingComponent key = {uid()} heading={this.state.heading}/>
				    <ModuloAvatarComponent key  = {uid()} avatar={this.state.avatar_2}/>
			    </div>
	}
}
module.exports = ModuloHeader;