import React from 'react';
import '../styles/index.scss';
import Card from './card.jsx';
import Code from './code.jsx';
import Business from './business.jsx';
import Mech from './mech.jsx';
import Veepx from './veepx.jsx';
import Veep from './veep.jsx';
import Csj from './csj.jsx';

export default class Projects extends React.Component {
	constructor(props){
		const type ={
			'code': [<Code />, '#7FB7BE', '#6C999F', '#8FCDD4'],
			'business': [<Business />, '#DACC3E', '#C3B635', '#EEE26C'],
			'mech': [<Mech />, '#EF5B5B', '#D75454', '#F87777']
		}
		super(props)
		this.state={
			projectInfoX: [{
				type: type['business'],
				companyName: 'Hope Totes',
				projectTitle: 'Market Analysis',
				skills: ['Systems Thinking', 'Design Thinking', 'Business Development'],
				projectDescription: 'Conduct market research and research best practices regarding online shopping/retail. End goal is to create a recommendation and business case illustrating what avenue Hope Totes should pursue',
				outcomes: 'Report on different types of markets that Hope Totes can expand to through development of an online platform for product purchasing',
				key: 'one',
			},
			{
				type: type['code'],
				companyName: 'Hope Totes',
				projectTitle: 'Search Engine Optimization',
				skills: ['HTML', 'CSS', 'Javascript', 'SEO Techniques','Testing'],
				projectDescription: 'Evaluation of current Hope Totes website to improve their SEO and improve click rates and viewership of Hope Totes website',
				outcomes: 'SEO website which is designed to increase click rate and time on pages',
				key: 'two',
			},
			{
				type: type['code'],
				companyName: 'FRW',
				projectTitle: 'Statistical Water Analysis',
				skills: ['Data Analysis', 'Python', 'R', 'Excel'],
				projectDescription: 'Graph water quality in the GTA to undertand water quality and potential correlation to residential health',
				outcomes: 'A report on the changes in historical water quality and potential root causes',
				key: 'three'
			}],

			projectInfo: [
			{
				type: type['mech'],
				companyName: 'FRW',
				projectTitle: 'Wetland Engineering',
				skills: ['AutoCAD'],
				projectDescription: 'Model diagrams to show trail construction techniques (focusing on under/over passes) and create models showing the design factors integrated',
				outcomes: 'CAD models which shows the construction techniques of various trails',
				key: 'four'
			},
			{
				type: type['code'],
				companyName: 'FRW',
				projectTitle: 'GIS Analysis',
				skills: ['MATLAB', 'Simulink', 'Python'],
				projectDescription: 'Usage of GIS imaging/mapping to evaluate the different land use patterns of watersheds. End state will be an analysis about the different uses of the watersheds and their downstream effects',
				outcomes: 'Report on different land uses and how watersheds are being utilized for residential/industrial applications',
				key: 'five'
			},
			{
				type: type['code'],
				companyName: 'Health Out Loud',
				projectTitle: 'Mobile App Development',
				skills: ['Android Studio', 'Objective C', 'Java'],
				projectDescription: 'Creation of an app to create a collaborative and safe environment to discuss mental health and share feelings (specific focus on social media integration and development of a "feelings" feed)',
				outcomes: 'Development of an app frame which will become functional once integrated with corresponding social media aspect',
				key: 'six'
			},
			{
				type: type['code'],
				companyName: 'Health Out Loud',
				projectTitle: 'Social Media Functionality',
				skills: ['Objective C', 'Python', 'Javascript'],
				projectDescription: 'Development of a social media parsing program that uses a "#feeling" to create a news feed which can sustain commenting/sharing to other social media programs',
				outcomes: 'Development of a social media system which will become functional once intagrated with corresponding mobile app aspect',
				key: 'seven'
			},
			{
				type: type['code'],
				companyName: 'CREW Toronto',
				projectTitle: 'Mobile App Development',
				skills: ['Android Studio', 'Objective C', 'Java'],
				projectDescription: 'Creation of an app to provide push notifications and preperation plans when there are potentially dangerous weather condition',
				outcomes: 'Development of an app frame which will become functional once integrated with corresponding weather tracking system',
				key: 'eight'
			},
			{
				type: type['code'],
				companyName: 'CREW Toronto',
				projectTitle: 'Extreme Weather Tracker',
				skills: ['MATLAB', 'Python', 'Java', 'Javascript'],
				projectDescription: 'Creation of a system to autonomously analyze weather trends from weather sites and send push notifications when specific weather conditions occur',
				outcomes: 'Development of a notification system that will be integrated into a mobile app frame',
				key: 'nine'
			},
			{
				type: type['code'],
				companyName: 'CityPlace Residents Association (CPRA)',
				projectTitle: 'Mobile App Development',
				skills: ['Objective C', 'Swift', 'C'],
				projectDescription: 'Creation of a mobile app to improve communication between CPRA and its members, display important announcements, and deliver upcoming event info',
				outcomes: 'Improve user experience for users that wish to keep up with their community through their mobile iOS devices',
				key: 'ten'
			},
			{
				type: type['code'],
				companyName: 'Heritage Toronto',
				projectTitle: 'Website Development',
				skills: ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'C++', 'Node.js', 'PHP', '.NET', 'SQL'],
				projectDescription: 'Re-development of heritagetoronto.org, which currently runs on WordPress.',
				outcomes: 'Improve user experience through an engaging and intuitive user interface and implement a more robust search engine. Highlight and encourage the following: content, programs, membership, donations, and e-newsletter sign-ups. Finally, provide social media integration.',
				key: 'eleven',
			}],

			projectInfoC: [{
				type: type['mech'],
				companyName: 'Pueblo Science',
				projectTitle: 'Robotics for the Developing World',
				skills: ['CAD', 'C/C++', 'Python', 'ANSYS', 'Circuit Design/Integration'],
				projectDescription: 'Design and implement a simple robotics tool-kit for beginner teachers and students in developing nations. The design should help alleviate local issues such as scanning terrain after natural disasters to better plan relief packages.\
									Students that take on this project will need to develop documentation in the form of video tutorials to show how the kit is assembled and programmed. In addition, availability of raw materials should be considered carefully as the kit should be able\
									to be assembled in their home nation.',
				outcomes: 'Design an end-to-end process of assembling simple machines that perform useful functions for children living in rural areas in developing countries.',
				key: 'twelve'
			}],
		}
	}
  render() {
    return (
    	<div className="projectsContainer">
    	<div className="projectOutline" style={{width: '100%'}}>
    		<h1 style={{
    			marginTop: '2vmax'
    		}}>
    			Logistics
    		</h1>
    		<p style={{
    			margin:'1vh 0 2vmax 0'
    		}} className="description">
    			Members chosen are offered plenty of avenues of support for their project.
    			By focusing on members professional skills not only will this reflect
    			positively on the respective project, but members walk away with valuable
    			industry skills.
    		</p>
    		<div className="iconArray" >
    			<div className="iconIndex checkIn">
    				<p className="iconCaption ">
    					Bi-weekly check-ins with the VEEP team
    				</p>
    			</div>
    			<hr/>
    			<div className="iconIndex supervisor">
    				<p className="iconCaption">
    					A specific supervisor at the not-for-profit organization
    				</p>
    			</div>
    			<hr />
    			<div className="iconIndex work">
    				<p className="iconCaption">
    					Workshops on professionalism and networking
    				</p>
    			</div>
    			<hr />
    			<div className="iconIndex leadership">
    				<p className="iconCaption">
    					Workshops on project management and leadership
    				</p>
    			</div>
    			<hr />
    			<div className="iconIndex development">
    				<p className="iconCaption">
    					Workshops on personal development
    				</p>
    			</div>
    		</div>
    	</div>
		<Veepx projectInfoX={this.state.projectInfoX}/>
		<Csj projectInfoC={this.state.projectInfoC}/>
		<Veep projectInfo={this.state.projectInfo}/>
		</div>
    )
  }
}
