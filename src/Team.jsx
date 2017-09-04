import React from 'react';
import '../styles/index.scss';
import Veep from './veeplogo.jsx';
import Dan from '../styles/images/dan.jpg';
import CardPeople from './cardPeople.jsx'

import Mech from './mech.jsx';
import Veepx from './veepx.jsx';


export default class Team extends React.Component {
constructor(props){
		const type ={
			'veep': [<Veep />, '#ECECEC', '#75558E' , '#F6F6F6'],
		}
		super(props)
		this.state={
			projectInfoX: [{
				type: type['veep'],
				companyName: 'Cool Digital',
				projectTitle: 'Daniel Kim',
				skills: [],
				key:'one',
				image: Dan,
				projectDescription: 'Conduct market research and research best practices regarding online shopping/retail. End goal is to create a recommendation and business case illustrating what avenue Hope Totes should pursue',
				outcomes: 'Report on different types of markets that Hope Totes can expand to through development of an online platform for product purchasing',
				discipline: 'MECH',
				disciplineLogo: 'logoMech',
				linkedin: 'https://www.linkedin.com/in/danielkim5/',
			},
			{
				type: type['veep'],
				companyName: 'Hope Totes',
				projectTitle: 'Search Engine Optimization',
				skills: [],
				key:'two',
				projectDescription: 'Evaluation of current Hope Totes website to improve their SEO and improve click rates and viewership of Hope Totes website',
				outcomes: 'SEO website which is designed to increase click rate and time on pages',
				discipline: 'MECH',
				disciplineLogo: 'logoMech',
				linkedin: '',
			},
			{
				type: type['veep'],
				companyName: 'FRW',
				projectTitle: 'Statistical Water Analysis',
				skills: [],
				key:'three',
				projectDescription: 'Graph water quality in the GTA to undertand water quality and potential correlation to residential health',
				outcomes: 'A report on the changes in historical water quality and potential root causes',
				discipline: 'MECH',
				disciplineLogo: 'logoMech',
				linkedin: '',
			}],
			expand: false,
			currentExpand: null,
		}
	}
	expandClicked(){
		this.setState({expand: !this.state.expand})
	}

	returnCards(){

		const cardList = this.state.projectInfoX.map((info) =>
	        <CardPeople ref={info.key} expandClicked={this.expandClicked.bind(this)} info= {info} key={info.projectTitle}>
	          </CardPeople>
	    );
	    // if (this.state.unMount=== false)
			return cardList
		// else{
		// 	return null
		// }
	}

	  expandClicked(name){
	  	
	    this.setState({expand: !this.state.expand, currentExpand: this.refs[name]})
	  
	  }

	  backClicked(){
	  	this.setState({expand: !this.state.expand})
	  	this.state.currentExpand.expandView()
	  
	  }
  render() {
    return (
    	<div className="projectsContainer">
	 <div className="veepX">
	      	<h1>
	      		The Team
	      	</h1>
	      	<p className="description">
	      		VeepX is a classification of projects that are intended for students who are more interested
	      		in learning. Designed for 1st and 2nd Years, these projects start at the foundational level
	      		and bring members up to speed for the required skills.
	      	</p>
	  	    <div className="sectionContainer" style={{
	  	    	marginBottom: '150px'
	  	    }}>
	  	      	{this.returnCards()}
	  	    </div>
	        {this.state.expand ? <div onClick={this.backClicked.bind(this)} className="greyBackground"/> : null}
	      </div>
	      </div>
	    )
  }
}
