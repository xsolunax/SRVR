import React from 'react';
import NewsCards from '../components/NewsCards';
import Schedule from './Schedule';

function Homepage() {
	return (
		<div className="main-container">
			<div className="banner">
				<video autoPlay muted loop playsInline className="teaser">
					<source src="https://srvr-assets.s3.us-west-1.amazonaws.com/SRVR ROSTER ANNOUNCEMENT 2024.mp4" type="video/mp4"></source>
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
					<Schedule />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
