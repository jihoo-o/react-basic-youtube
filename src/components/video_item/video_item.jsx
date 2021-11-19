import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({
    videoId,
    thumbnails,
    videoTitle,
    channelTitle,
    onVideoClick,
}) => {
    return (
        <li className={styles.container}>
            <div
                className={styles.thumbnail}
                onClick={() => onVideoClick(videoId)}
            >
                <img src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className={styles.description}>
                <p
                    className={styles.title}
                    onClick={() => onVideoClick(videoId)}
                >
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
