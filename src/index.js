import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import YoutubeFetch from './service/youtube-fetch';
import Ui from './test/ui';

const youtubeFetch = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
    <React.StrictMode>
        <App youtubeFetch={youtubeFetch} />
        {/* <Ui /> */}
    </React.StrictMode>,
    document.getElementById('root')
);
