import React from 'react';
import '../styles/index.scss';
import Projects from './projects.jsx';
import About from './about.jsx';
import Team from './Team.jsx';
export default class Body extends React.Component {
	renderWhat(){
		if (this.props.renderThis === 'projects'){
			return <Projects />
		}
		if (this.props.renderThis === 'about'){
			return <About />
		}

		if(this.props.renderThis === 'team'){
			return <Team />
		}
	}
  render() {
    return (
      <div className="projectBox">
       {this.renderWhat()}
      </div>
    )
  }
}
