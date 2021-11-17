import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ videoTitle, channelTitle }) => {
    return (
        <li className={styles.container}>
            <div className={styles.thumbnail}>
                <img src="../../../public/images/logo.png" alt="thumbnail" />
            </div>
            <div className={styles.description}>
                <p className={styles.title}>{videoTitle}</p>
                <p className={styles.channelTitle}>{channelTitle}</p>
            </div>
        </li>
    );
};

export default VideoItem;
