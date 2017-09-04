import React from 'react';
import '../styles/index.scss';
import Countdown from 'react-cntdwn';


export default class Counter extends React.Component {
	constructor(props){
		super(props)
		this.end = {		day: 'dd',
			  hour: 'hh',
			  minute: 'mm',
			  second: 'ss'}

	}

	// componentDidMount(){
	// 	var d = this.state.currentDate
	// 	this.setState({currentDate:[this.state.currentDate.getMinutes(), this.state.currentDate.getHours(), this.state.currentDate.getDate()]})
	// 	this.doMath()
	// }

	// doMath(){
	// 	var currentDate = this.state.currentDate
	// 	var dueDate = this.state.dueDate
	// 	for (var i = 0; i<3; i++){
	// 		if (dueDate[i] < currentDate[i]){

	// 		}
	// 	}
	// }

 
  render() {

    return (
    		<div>
    		<Countdown className="timer" targetDate={new Date('Septmeber 11, 2017')}
	           interval={1000}
	           format = {this.end}
	           timeSeparator={'  '}
	           leadingZero
	           />
    		</div>
	    )
  }
}
