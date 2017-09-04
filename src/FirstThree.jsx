import React from 'react';
import '../styles/index.scss';



export default class FirstThree extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			renderThis: 'about'
		}
	}
  render() {
    return (
		<div className="containerForThree">
			<div className="contentContainer">
				<div className="image uno">
				</div>
				<h3 className="imageCaption">
					Technical Rigor
				</h3>
				<p className="imageDescription">
					VEEP addresses the lack of social technical design opportunities for engineering students to apply their talents.

				</p>
			</div>
			<div className="contentContainer">
				<div className="image dos">
				</div>
				<h3 className="imageCaption">
					Social Responsibility
				</h3>
				<p className="imageDescription">
					With the motto “Engineers for the World” in mind, VEEP develops social awareness in students.
				</p>
			</div>
			<div className="contentContainer">
				<div className="image trois">
				</div>
				<h3 className="imageCaption">
					Community Engagement
				</h3>
				<p className="imageDescription">
					By working with local non-profit organizations, VEEP enables students to explore social causes in the Greater Toronto Area.
				</p>
			</div>
		</div>
	    )
  }
}
