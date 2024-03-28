import React, { useState, useEffect } from 'react';

function Admin() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/newsList')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const sortedNewsList = data.map((item) => item).sort((a, b) => parseInt(b.id) - parseInt(a.id));
				setNews(sortedNewsList);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="main-container">
			<div className="panel">
				<h1>Add/Edit News</h1>
				<div className="addNews">
					<button className="addItem">Add News</button>
				</div>
				<div className="newsList">
					{news.map((newsItem) => {
						return (
							<div className="news" key={newsItem.id}>
								<div>
									<p>{newsItem.title}</p>
									<button>Delete</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Admin;
