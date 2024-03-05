import React, { useEffect, useState } from 'react';

//	{ id: '1', title: '', date: '', imgPath: '' },

const newsList = [
	{ id: '1', title: 'SRVR ESPORTS will be competing in VCT Open Qualifiers 2', date: 'February 12, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/VCT_DAY_1.png' },
	{ id: '2', title: 'SRVR ESPORTS LOST the first match up of VCT Open Qualifiers 2 against TAMU Maroon', date: 'February 12, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/Defeat_vct.png' },
	{ id: '3', title: 'UBCEA x SFUEA x UVicEA Winter WonderLAN tournament!', date: 'February 17, 2024', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/MatchDay_UBC.png' },
];

const sortedNewsList = newsList.map((item) => item).sort((a, b) => parseInt(b.id) - parseInt(a.id));

function NewsCards() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		setNews(sortedNewsList);
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
