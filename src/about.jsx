import React from 'react';
import '../styles/index.scss';
import Background from './background.jsx';
import FirstThree from './FirstThree.jsx';

export default class About extends React.Component {
    
  render() {
    return (
    	<div className="home">

            <Background />
        <div className="welcome">
            <h2 className="mission">
                The Volunteer Engineering Experience Program pairs <b>engineering 
                students</b> with local <b>not-for-profit organizations</b> to 
                tackle technical projects with <b>real-world impact.</b>
            </h2>
            <FirstThree />
            <div className="testimonials">
                <p style={{margin: '5% 0 5% 0'}}>
                    <b className="quotation">“</b>Our project was very engaging and gave us to chance
                     to contribute positively to SickKids. The experience also helped 
                     myself and my teammates get summer and full-time jobs in the biomedical 
                     engineering fields. I would definitely recommend it to anyone looking to 
                     develop both their engineering and collaborative skills.<b className="quotation">”</b>
                     - Michelle Samfira
                </p>
                <p style={{margin: '5% 0 5% 0'}}>
                    <b className="quotation">“</b>VEEP is one of the rare organizations that gives students from all engineering disciplines the opportunity to challenge their technical skills while making a difference. I was able to test and prove my engineering abilities. This experience taught me a lot and I would do it again.<b className="quotation">”</b>
                     - Nicole Wongsoo
                </p>
                    <p style={{margin: '5% 0 5% 0'}}>
                    <b className="quotation">“</b>
                        Being in VEEP was a fantastic experience. It offered me an opportunity to work in a multi-year and multidisciplinary team to apply my academic knowledge for solving real problems for real industry clients. I would 10/10 recommend to any engineering student.
                    <b className="quotation">”</b>
                     - Arash Nourimand
                </p>
            </div>
            <div className="story">
                <p>
                    VEEP is a unique program at the University of Toronto, pairing teams of four students with local not-for-profit organizations to work on innovative technical projects. For the upcoming year, we have twelve new and exciting projects from our non-profit partners. Some of these projects will run for the entire academic year, while some will conclude before the end of first semester. VEEP will also offer winter semester projects — check back later to apply!
Each student will contribute roughly four hours per week to their project, but this may not be distributed evenly through the term. Not-for-profit partners will contribute approximately an hour per week to the project.
                
                </p>
            </div>
        </div>
       
	    </div>
	    )
  }
}
