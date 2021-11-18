import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ thumbnails, videoTitle, channelTitle }) => {
    return (
        <li className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className={styles.description}>
                <p className={styles.title}>
                    {videoTitle.length < 45
                        ? videoTitle
                        : `${videoTitle.substring(0, 45)}...`}
                </p>
                <p className={styles.channelTitle}>{channelTitle}</p>
            </div>
        </li>
    );
};

export default VideoItem;
