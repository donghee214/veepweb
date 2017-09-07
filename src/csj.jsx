import React from 'react';
import '../styles/index.scss';
import Projects from './projects.jsx'
import Card from './card.jsx'
export default class Csj extends React.Component {
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

		const cardList = this.props.projectInfoC.map((info) =>
	        <Card ref={info.key} expandClicked={this.expandClicked.bind(this)} info= {info} key={info.projectTitle}>
	          </Card>
	    );
		return cardList
	}

	  expandClicked(name){
	    this.setState({expand: !this.state.expand, currentExpand: this.refs[name]})
	  }

	  backClicked(){
	  	this.setState({expand: !this.state.expand})
	  	this.state.currentExpand.expandView()

	  }

	unMount(){
		this.setState({unMount: true})
	}
  render() {
    return (
      <div className="veepX">
      	<h1>
      		CSJ (Canada Summer Jobs)
      	</h1>
      	<p className="description">
          	CSJ is a program designed to create summer work opportunities for students. This year we are launching VEEP's very own pilot CSJ Integration! Not-for-profits who have agreed to
            move through the CSJ application process to earn government funding will have their projects displayed here. If exceptional project work has been demonstrated, students can expect
			to be hired formally as a summer intern doing <em>meaningful</em> engineering work! More info on CSJ can be found <a href='https://www.canada.ca/en/employment-social-development/services/funding/youth-summer-job.html'>here</a>.
      	</p>
	    <div className="sectionContainer">
	      	{this.returnCards()}
	    </div>
	    {this.state.expand ? <div onClick={this.backClicked.bind(this)} className="greyBackground"/> : null}
      </div>
    )
  }
}
