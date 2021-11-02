import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './app.css';
import VideoList from './components/video_list/video_list.jsx';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD2M0LdLYNpuqBd1nOT1K96QOTYjw8uYf4',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log('error', error));
    }, []);

    return <VideoList videos={videos} />;
};

export default App;
