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
        transform: 300
      }
    }
    willLeave() {
      return {
        transform: spring(300)
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
                    transform: 'translate3d(' + item.style.transform + 'px ,0, 0)'
                  }}>
                  	   <p className="projectDescription">
                                        {this.props.info.projectDescription}
                                    </p>
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
