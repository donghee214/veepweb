import React from 'react';
import '../styles/index.scss';
export default class Tag extends React.Component {
  render() {
    return (
    	<div className="tag" style={{
    		backgroundColor: this.props.color
    	}}>
	   		{this.props.tag}
	    </div>
	    )
  }
}
