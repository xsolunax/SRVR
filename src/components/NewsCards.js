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
			setNews(newsList);
		} catch (error) {
			console.log('error fetching news', error);
		}
	};
	return (
		<>
			<a className="twitter-timeline" data-height="800" data-theme="dark" href="https://twitter.com/SRVR_Esports?ref_src=twsrc%5Etfw"></a>{' '}
		</>
	);
}

export default NewsCards;
