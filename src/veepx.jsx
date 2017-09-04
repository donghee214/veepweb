import React from 'react';
import '../styles/index.scss';
import Projects from './projects.jsx'
import Card from './card.jsx'
export default class Veepx extends React.Component {
	constructor(props){
		super(props)
		this.state={
			cards: [],
			expand: false,
			currentExpand: null,
			// coor: '',
		}
	}
	// componentDidMount(){
	// 	this.returnCards()
	// }
	returnCards(){

		const cardList = this.props.projectInfoX.map((info) =>
	        <Card ref={info.key} expandClicked={this.expandClicked.bind(this)} info= {info} key={info.projectTitle}>
	          </Card>
	    );
	    // if (this.state.unMount=== false)
			return cardList
		// else{
		// 	return null
		// }
	}
	// renderBackground(){

	// }


	  expandClicked(name){	
	    this.setState({expand: !this.state.expand, currentExpand: this.refs[name]})  
	  }

	  backClicked(){
	  	this.setState({expand: !this.state.expand})
	  	this.state.currentExpand.expandView()
	  
	  }
	// renderCards(card){
	// 	var expand = ''
	// 	if (card.num % 3 == 0){
	// 		expand = 'expandLeft '
	// 	}
	// 	else if (card.num % 3 == 1){
	// 		expand = 'expandCenter '
	// 	}
	// 	else if (card.num % 3 == 2){
	// 		expand = 'expandRight '
	// 	}
		
	// 	// console.log(card)
	// 	const selectCard = <Card expandView={expand} unrender={this.state.unrender} expandClicked={this.renderCards.bind(this)} info= {card} key={card.projectTitle} />
	// 	this.setState({unrender: true, cards: selectCard})

	// }	


	unMount(){
		this.setState({unMount: true})
	}
  render() {
    return (
      <div className="veepX">
      	<h1>
      		VeepX
      	</h1>
      	<p className="description">
      		VeepX is a classification of projects that are intended for students who are more interested
      		in learning. Designed for 1st and 2nd Years, these projects start at the foundational level
      		and bring members up to speed for the required skills.
      	</p>
	    <div className="sectionContainer">
	      	{this.returnCards()}
	    </div>
	    {this.state.expand ? <div onClick={this.backClicked.bind(this)} className="greyBackground"/> : null}
      </div>
    )
  }
}
