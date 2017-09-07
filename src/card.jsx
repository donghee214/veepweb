import React from 'react';
import '../styles/index.scss';
import Due from './due.jsx';
import {Motion, spring} from 'react-motion';
import CardTitle from './cardTitle.jsx';
import TopCardTitle from './TopCardTitle.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import ProjectDescriptionExpand from './ProjectDescriptionExpand.jsx';
import Tag from './tag.jsx';
import Expand from './expand.jsx'

export default class Card extends React.Component {
	constructor(props){
		super(props)
		this.state={
			expand: this.props.expand,
			expandClass: 'cardContainer',
            unmount: false,
            tags: null,

		}
	}

    expandView = () =>{
        // const location = this.refs.cardLocation
        // const coor = location.getBoundingClientRect()
        this.setState({expand: !this.state.expand})
        this.props.expandClicked(this.props.info.key)
        this.resizeIcon()
    }

    // componentWillReceiveProps(nextProps) {
    //         this.setState({unmount: this.props.unrender});
    // }

	isActive(){
		return 'cardContainer ' + (this.state.expand ? 'expand' : '')
	}

    resizeIcon(){
        return 'iconWrapper ' + (this.state.expand ? 'iconResize' : '')
    }

    textContent(){
        return 'textContent ' + (this.state.expand ? 'textContentExpand': '')
    }

    topPart(){
       return 'topPart ' + (this.state.expand ? 'topPartExpand': '')
    }
    componentDidMount(){
        const tags = this.props.info.skills.map((tag) =>
        <Tag key={tag} color={this.props.info.type[1]} tag={tag} />);
        this.setState({tags:tags})
    }




	// expand(){
	// 	if (this.state.expand === false){
	// 		this.setState({expandClass: 'cardContainer'})
	// 	}
	// 	else if(this.state.expand === true){
	// 		this.setState({expandClass: 'cardContainer expand'})
	// 	}
	// }

    // unMount(){
    //     this.props.unMount()
    // }




  render() {
    return (

            <div ref="cardLocation" className={this.isActive()}>
                <div style={{backgroundColor: this.props.info.type[1]}} className={this.topPart()}>
                    <div className={this.resizeIcon()}>
                        {this.props.info.type[0]}
                    </div>
                    <TopCardTitle info ={this.props.info} doUnmount ={this.state.expand}/>
                    <div onClick={this.expandView.bind(this)} className="expandBtn">
                        <Expand clicked={this.state.expand}/>
                    </div>
                </div>
               <CardTitle info ={this.props.info} doUnmount ={this.state.expand} />
                <div className={this.textContent()}>
                    <ProjectDescription info ={this.props.info} doUnmount ={this.state.expand} />
                    <ProjectDescriptionExpand tags={this.state.tags} info ={this.props.info} doUnmount ={this.state.expand} />
                </div>
                <div style ={{backgroundColor: this.props.info.type[3], borderColor: this.props.info.type[2]}} className="bottomPart">
                    <div className = "para extra1">
                        <h3 style={{color:this.props.info.type[2]}} className="label">
                            HIGH
                        </h3>
                    </div>

                    <div style={{borderColor: this.props.info.type[2], color:this.props.info.type[2]}} className = "para extra2">
                        <Due color={this.props.info.type[3]}/>
                        <h3 className="label">
                            DAYS
                        </h3>
                    </div>
                    <div className = "para extra3">
                        <h3 style={{color:this.props.info.type[2]}} className="label">
                            LORENIP
                        </h3>
                    </div>
                </div>

              </div>





    )
  }
}
