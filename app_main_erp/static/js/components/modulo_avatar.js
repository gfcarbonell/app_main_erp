/*
 * Module dependencies
 */
var React = require ("react");
var $ 	  = require ("jquery");
require("materialize");


class ModuloAvatar extends React.Component 
{
	constructor(props)
	{
		super(props);
	}

	render() 
	{
	    return  <figure className="container-modulo-avatar"> 
	    			<img 
	    				id={this.props.avatar.id}
	    			    className="container-modulo-avatar-imagen materialboxed"
	    			    src={this.props.avatar.imagen}
	    			    data-caption={this.props.avatar.nombre}
	    			    alt={this.props.avatar.nombre}/>
	    	    </figure>	
	}
}
ModuloAvatar.defaultProps = { avatar: [] };
module.exports = ModuloAvatar;
