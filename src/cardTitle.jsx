import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from 'react-motion';

export default class CardTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rendered: true,
    }
  }
    willEnter() {
      return {
        transform: -135
      }
    }
    willLeave() {
      return {
        transform: spring(-135)
      }
    }
    render() {
      {
    return (
      <TransitionMotion
        styles={this.props.doUnmount ? [] : [{
          key: 'child',
          data: {},
          style: {transform: spring(0)}
        }]}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div>
                {items.map(item => {
                  return (
                    <div key={item.key} style ={{
                    transform: 'translate3d(0,'+ item.style.transform + 'px, 0)',

                  }}>
                  	   <h3 style={{color:this.props.info.type[2]}} className="companyName">
                                        {this.props.info.companyName}
                        </h3>
                          <h2 className="projectName">
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
