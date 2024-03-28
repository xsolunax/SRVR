import React, { useEffect, useState } from 'react';

//	{ id: '1', title: '', date: '', imgPath: 'https://srvr-assets.s3.us-west-1.amazonaws.com/' },

function NewsCards() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		//setNews(sortedNewsList);
		fetch('http://localhost:3001/newsList')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const sortedNewsList = data.map((item) => item).sort((a, b) => parseInt(b.id) - parseInt(a.id));
				setNews(sortedNewsList);
			})
			.catch((err) => {
				console.log(err.message);
			});debugger
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
