import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
const root = ReactDOM.createRoot(document.getElementById('root'));

Amplify.configure(amplifyconfig);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
