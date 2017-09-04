import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from 'react-motion';

export default class CardTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rendered: true,
      topText: ''
    }
  }

    componentDidMount(){
       if (this.props.info.skills.length === 0){
        this.setState({topText: 'projectNameTop expandPeople'})
      }
      else{
        this.setState({topText: 'projectNameTop expandTitle'})
      }
    }
    willEnter() {
      return {
        transform: -200
      }
    }
    willLeave() {
      return {
        transform: spring(-200)
      }
    }

    returnTopTest(){

    }

    // topPartContainer(){
    //   return 'topPartContainer ' + (this.state.expand ? 'topPartContainerExpand': '')
    // }
    render() {
      {
    return (
      <TransitionMotion
        styles={this.props.doUnmount ? [{
          key: 'child',
          data: {},
          style: {transform: spring(0)}
        }] : []}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div className="topPartContainer">
                {items.map(item => {
                  return (
                    <div key={item.key} style ={{
                    transform: 'translate3d(' + item.style.transform  + 'px, 0, 0)'
                  }}>
                  	   <h3 style={{color:this.props.info.type[2]}} className={"companyNameTop expandTitle"}>
                                        {this.props.info.companyName}
                        </h3>
                          <h2 className={this.state.topText}>
                                        {this.props.info.projectTitle}
                           </h2>
                    </div>
                  );
                })}
              </div>
            )
          }}
      </TransitionMotion>
    )
  }
}
}
