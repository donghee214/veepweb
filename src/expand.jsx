import React from 'react';
import '../styles/index.scss';

export default class Expand extends React.Component {
	isActive(){
		return 'expandIcon ' + (this.props.clicked ? 'rotate' : '')
	}

  render() {
    return (
		<svg className={this.isActive()} fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	    )
  }
}
