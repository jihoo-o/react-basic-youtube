import React, { useState, useEffect } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ youtubeFetch }) => {
    const [videos, setVideos] = useState({});

    useEffect(() => {
        youtubeFetch //
            .mostPopular() //
            .then((result) => {
                const updated = { ...videos };
                result.forEach((video) => {
                    updated[video.id] = {
                        videoTitle: video.snippet.title,
                        channelTitle: video.snippet.channelTitle,
                        thumbnails: video.snippet.thumbnails,
                    };
                });
                setVideos(updated);
            });
    }, [youtubeFetch]);

    return (
        <ul className={styles.videoList}>
            {Object.keys(videos).map((key) => (
                <VideoItem
                    key={key}
                    thumbnails={videos[key].thumbnails}
                    videoTitle={videos[key].videoTitle}
                    channelTitle={videos[key].channelTitle}
                />
            ))}
        </ul>
    );
};

export default VideoList;
