import React from 'react';
import NewsCards from '../components/NewsCards';

function Homepage() {
	return (
		<div className="main-container">
			<div className="banner">
				<video autoPlay muted loop className="teaser">
					<source src="/srvr_roster_teaser_3.mp4" type="video/mp4"></source>
				</video>
			</div>
			<div className="panel" id="latest-news">
				<div className="panel-container">
					<h1 className="panel-title">
						Latest <span className="inv">News</span>
					</h1>
					<NewsCards />
				</div>
			</div>
			<div className="panel" id="schedule">
				<div className="panel-container">
					<h1 className="panel-title">Schedule</h1>
					<iframe allowTransparency={'true'} src={'https://view.monday.com/embed/5856431756-4344539b9f5333ce6e23f25e721cdd4c?r=use1'} width={'100%'} height={'700'} style={{ borderRadius: '10px', border: '0', boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)', backgroundColor: 'black' }}></iframe>;
				</div>
			</div>
		</div>
	);
}

export default Homepage;
