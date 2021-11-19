import React, { useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

const App = ({ youtubeFetch }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div
            className={`${styles.container} ${
                selectedVideo ? styles.nowrap : styles.wrap
            }`}
        >
            {selectedVideo && (
                <section className={styles.videoDetail}>
                    <VideoDetail videoId={selectedVideo} />
                </section>
            )}
            <section className={styles.videoList}>
                <VideoList
                    youtubeFetch={youtubeFetch}
                    onVideoClick={selectVideo}
                    displayType={selectedVideo ? 'nowrap' : 'wrap'}
                />
            </section>
        </div>
    );
};

export default App;
