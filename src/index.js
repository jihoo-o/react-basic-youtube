import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import axios from 'axios';
import Youtube from './service/youtube';

const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);

ReactDOM.render(
    <React.StrictMode>
        <App youtube={youtube} />
    </React.StrictMode>,
    document.getElementById('root')
);
