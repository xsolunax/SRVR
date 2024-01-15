import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import { Timeline, Tweet } from 'react-twitter-widgets';

const client = generateClient();

function NewsCards() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		try {
			const newsData = await client.graphql({ query: queries.listNews });
			const newsList = newsData.data.listNews.items;
			setNews(newsList);
		} catch (error) {
			console.log('error fetching news', error);
		}
	};
	return (
		<div className="news-list">
			{/* {news.map((newsItem) => {
				return (
					<div className="news-item" key={newsItem.id}>
						<div className="news-img" style={{ backgroundImage: `${newsItem.pathImg}` }}></div>
						<p className="news-title">{newsItem.title}</p>
						<p className="news-date">{newsItem.date}</p>
					</div>
				);
			})} */}
			<a class="twitter-timeline" data-width="1200" data-height="800" data-theme="dark" href="https://twitter.com/SRVR_Esports?ref_src=twsrc%5Etfw">
				Tweets by SRVR_Esports
			</a>{' '}
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	);
}

export default NewsCards;
