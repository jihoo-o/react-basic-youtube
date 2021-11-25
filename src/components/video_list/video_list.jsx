import React, { useState, useEffect } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, displayType }) => {
    return (
        <ul
            className={`${styles.videoList} ${
                displayType === 'nowrap' ? styles.nowrap : styles.wrap
            }`}
        >
            {Object.keys(videos).map((key) => (
                <VideoItem
                    key={key}
                    videoId={key}
                    video={videos[key]}
                    onVideoClick={onVideoClick}
                    displayType={displayType}
                />
            ))}
        </ul>
    );
};

export default VideoList;
