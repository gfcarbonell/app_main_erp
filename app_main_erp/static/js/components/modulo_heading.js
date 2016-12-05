/*
 * Module dependencies
 */
var React = require ("react");
var $ 	  = require ("jquery");
require("materialize");


class ModuloHeading extends React.Component 
{
	constructor(props)
	{
		super(props);
	}

	render() 
	{
	    return  (
		    		<div className="container-modulo-heading">
	    				{
	    					this.props.heading.is_main == true ? this.heading_h1(): this.heading_h2()
	    				}
		    		</div>
	    		)
	}

	heading_h1()
	{
		return  <h1 className="center-align titulo">
		    		{this.props.heading.titulo}
		    	</h1>
	}
	heading_h2()
	{
		return  <h2 className="center-align subtitulo">
		    		{this.props.heading.titulo}
		    	</h2>
	}
}
ModuloHeading.defaultProps = { heading: [] };
module.exports = ModuloHeading;