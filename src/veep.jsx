import React from 'react';
import '../styles/index.scss';
import Projects from './projects.jsx'
import Card from './card.jsx'
export default class Veep extends React.Component {
	 constructor(props){
    super(props)
    this.state={
      cards: [],
      currentExpand: null,
    }
  }


  returnCards(){
    const cardList = this.props.projectInfo.map((info) =>
          <Card ref={info.key} expandClicked={this.expandClicked.bind(this)} info= {info} key={info.key}>
            </Card>
      );
      // if (this.state.unMount=== false)
      return cardList
    // else{
    //  return null
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
      <div className="veepX">
      	<h1>
      		Veep
      	</h1>
      	<p className="description">
      		VeepX is a classification of projects that are intended for students who are more interested
      		in learning. Designed for 1st and 2nd Years, these projects start at the foundational level
      		and bring members up to speed for the required skills.
      	</p>
  	    <div className="sectionContainer veepContainer">
  	      	{this.returnCards()}
  	    </div>
        {this.state.expand ? <div onClick={this.backClicked.bind(this)} className="greyBackground"/> : null}
      </div>
    )
  }
}
