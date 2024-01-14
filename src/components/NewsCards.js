import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listNews } from '../graphql/queries';

const NewsCards = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		try {
			const newsData = await API.graphql(graphqlOperation(listNews));
			const newsList = newsData.data.listNews.items;

			console.log('news list', newsList);
			setNews(newsList);
		} catch (error) {
			console.log('error on fetching news', error);
		}
	};
};

export default NewsCards;
