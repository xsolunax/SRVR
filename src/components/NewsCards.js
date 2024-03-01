import React, { useEffect, useState } from 'react';

//	{ id: '2', title: '', date: '', imgPath: '' },

const newsList = [
	{ id: '1', title: 'SRVR is the champion of Waypoint Lounge’s Weekly Tournament [#13] against The Farmers', date: 'January 10, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/Defeated.png' },
	{ id: '2', title: 'SRVR ESPORTS wins semi-finals against OverHeat with a score of 13-3!', date: 'January 10, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/Defeated.png' },
	{ id: '3', title: "We'd like to introduce you to the newest addition to the SRVR Fam, @SRVR x PERLAS!", date: 'January 10, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/SRVR-Perlas.png' },
	{ id: '4', title: 'SRVR ESPORTS placed 2nd on the A2I Open Invitational Tournament sponsored by MSI.', date: 'January 13, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/Defeated.png' },
	{ id: '5', title: 'WATCH SRVR ESPORTS  COMPETE IN A2i’s OPEN INVITATIONAL FINALS TOURNAMENT @ 3:45 PM EST! ', date: 'January 13, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/MatchDay.png' },
];

function NewsCards() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		setNews(newsList);
	}, []);

	return (
		<div className="news-list">
			{news.map((newsItem) => {
				return (
					<div className="news-item" key={newsItem.id} style={{ backgroundImage: `url(${newsItem.imgPath})` }}>
						<div className="news-heading">
							<p className="news-title">{newsItem.title}</p>
							<p className="news-date">{newsItem.date}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default NewsCards;
