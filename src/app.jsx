import React from 'react';
import VideoList from './components/video_list/video_list';

const App = ({ youtubeFetch }) => {
    return <VideoList youtubeFetch={youtubeFetch} />;
};

export default App;
