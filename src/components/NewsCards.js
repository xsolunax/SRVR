import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

const client = generateClient();
const variables = {
	filter: {
		priority: {
			eq: 'date',
		},
	},
};

function NewsCards() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		try {
			const newsData = await client.graphql({ query: queries.listNews, variables: variables });
			const newsList = newsData.data.listNews.items;
			setNews(newsList);
		} catch (error) {
			console.log('error fetching news', error);
		}
	};
	return (
		<div className="news-list">
			{news.map((newsItem) => {
				return (
					<div className="news-item" key={newsItem.id}>
						<div className="news-img" style={{ backgroundImage: `${newsItem.pathImg}` }}></div>
						<p className="news-title">{newsItem.title}</p>
						<p className="news-date">{newsItem.date}</p>
					</div>
				);
			})}
		</div>
	);
}

export default NewsCards;
