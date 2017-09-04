import React from 'react';
import '../styles/index.scss';
import Body from './body.jsx';
import Nav from './nav.jsx';
import Footer from './footer.jsx'

export default class Logo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			renderThis: 'about'
		}
	}

	redirect(option){
		this.setState({renderThis: option})
	}
  render() {
    return (
		<div style={{
			position:'relative'
		}}>
			<Nav redirect={this.redirect.bind(this)}/>
			<Body renderThis={this.state.renderThis}/>
			<Footer />
		</div>
	    )
  }
}
