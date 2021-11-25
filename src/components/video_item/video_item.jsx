import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ videoId, video, onVideoClick, displayType }) => {
    return (
        <li
            className={`${styles.container} ${
                displayType === 'nowrap' ? styles.nowrap : styles.wrap
            }`}
        >
            <div
                className={styles.thumbnail}
                onClick={() => onVideoClick(videoId)}
            >
                <img src={video.thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className={styles.description}>
                <p
                    className={styles.title}
                    onClick={() => onVideoClick(videoId)}
                >
                    {video.videoTitle.length < 45
                        ? video.videoTitle
                        : `${video.videoTitle.substring(0, 45)}...`}
                </p>
                <p className={styles.channelTitle}>{video.channelTitle}</p>
            </div>
        </li>
    );
};

export default VideoItem;
