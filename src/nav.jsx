import React from 'react';
import '../styles/index.scss';
import Logo from './logo.jsx'
export default class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            class: '',
            option: '',
        }
    }

	// returnOption(option){
	// 	this.props.redirect(option)
	// }

    // componentDidMount(){
    // if ( $(window).width() > 320 ) {  
    //     this.setState({class: 'alignOmgMobile', option: ''})  
    // }  
    // else {  
    //     $('content').removeClass('large');  
    // }  
    // }
  render() {
    return (
    	<div className="nav">
    		<Logo />
    		<div className ="options">
    		<div className="alignOmg">
    			<div onClick = {()=>{this.props.redirect("about")}} className ="option home">ABOUT US</div>
    			<div onClick ={() => {this.props.redirect("team")}} className ="option teamlogo">OUR TEAM</div>
    			<div onClick = {()=>{this.props.redirect("projects")}} className ="option projects">PROJECTS</div>
    			<div className ="option mail">CONTACT</div>
    			</div>
    		</div>
	    </div>
	    )
  }
}
