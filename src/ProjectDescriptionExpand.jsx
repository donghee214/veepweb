import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from 'react-motion';


export default class ProjectDescriptionExpand extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rendered: true,
    }
  }
    willEnter() {
      return {
        transform: -250
      }
    }
    willLeave() {
      return {
        transform: spring(-250)
      }
    }




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
              <div>
                {items.map(item => {
                  return (
                    <div key={item.key} style ={{
                    transform: 'translate3d('+ item.style.transform + 'px, 0, 0)',
                    position: 'absolute',
                    top: '80px',
                    width: '100%'
                  }}>
                          <h2 className="projectName expandText shrinkTitle">
                                        Description
                           </h2>
                            <p className="projectDescription expandText">

                                        {this.props.info.projectDescription}
                              </p>
                                 <h2 className="projectName expandText shrinkTitle">
                                        Outcome
                           </h2>
                              <p className="projectDescription expandText">
                                        {this.props.info.outcomes}
                              </p>
                            <h2 className="projectName expandText shrinkTitle">
                                        Skills
                           </h2>
                              <div className="projectDescription expandText tagContainer">
                                        {this.props.tags}
                              </div>

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
