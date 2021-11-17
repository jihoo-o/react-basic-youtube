import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
    const fakeData = {};
    for (let i = 1; i < 21; i++) {
        fakeData[i] = {
            videoTitle: 'lalala',
            channelTitle: 'abcStudio',
        };
    }
    return (
        <ul className={styles.videoList}>
            {Object.keys(fakeData).map((key) => (
                <VideoItem
                    key={key}
                    videoTitle={fakeData[key].videoTitle}
                    channelTitle={fakeData[key].channelTitle}
                />
            ))}
        </ul>
    );
};

export default VideoList;
