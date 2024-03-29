import React from 'react';
import NewsCards from '../components/NewsCards';

function News() {
	return (
		<div className="main-container">
			<div className="panel" id="latest-news">
				<div className="panel-container">
					<h1 className="panel-title">
						Latest <span className="inv">News</span>
					</h1>
					<NewsCards />
				</div>
			</div>
		</div>
	);
}

export default News;
