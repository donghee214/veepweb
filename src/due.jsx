import React from 'react';
import '../styles/index.scss';


export default class Due extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			date: 0,
		}
	}
	componentDidMount(){
		const d = new Date()
		this.setState({date: 30 - d.getDate()})
	}
  render() {
    return (
      <div style={{color:this.props.color}} className = "date">
      	{this.state.date}
      </div>
    )
  }
}
