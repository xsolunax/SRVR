import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

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
			console.log('news list', newsList);
			setNews(newsList);
		} catch (error) {
			console.log('error fetching news', error);
		}
	};
	return <div>NewsCards</div>;
}

export default NewsCards;
