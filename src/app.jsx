import React, { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import CommentThread from './components/comment_thread/comment_thread';
import SearchHeader from './components/search_header/search_header';

const App = ({ youtubeFetch }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState({});
    const [videos, setVideos] = useState({});

    const selectVideo = useCallback((video) => {
        typeof video === 'string'
            ? setSelectedVideo(video)
            : setSelectedVideo(null);
    });

    const handleLogoClick = useCallback(() => {
        loadPopularVideos();
        selectVideo(null);
    });

    const loadPopularVideos = useCallback(() => {
        youtubeFetch //
            .mostPopular() //
            .then((result) => {
                const updated = {};
                result.forEach((video) => {
                    updated[video.id] = {
                        videoTitle: video.snippet.title,
                        channelTitle: video.snippet.channelTitle,
                        thumbnails: video.snippet.thumbnails,
                    };
                });
                setVideos(updated);
            });
    });

    const search = useCallback((word) => {
        youtubeFetch //
            .search(word) //
            .then((result) => {
                const updated = {};
                result.forEach((video) => {
                    updated[video.id] = {
                        videoTitle: video.snippet.title,
                        channelTitle: video.snippet.channelTitle,
                        thumbnails: video.snippet.thumbnails,
                    };
                });
                setVideos(updated);
            });
    });

    useEffect(() => {
        loadPopularVideos();
    }, [youtubeFetch]);

    useEffect(async () => {
        if (!selectedVideo) return;
        const result = await youtubeFetch.videoComment(selectedVideo);
        const updated = {};
        result.forEach((item) => {
            const snippet = item.snippet.topLevelComment.snippet;
            updated[item.id] = {
                authorDisplayName: snippet.authorDisplayName,
                textOriginal: snippet.textOriginal,
                likeCount: snippet.likeCount,
            };
        });
        setComments(updated);
    }, [youtubeFetch, selectedVideo]);

    return (
        <>
            <header className={styles.searchHeader}>
                <SearchHeader onLogoClick={handleLogoClick} onSearch={search} />
            </header>
            <div
                className={`${styles.container} ${
                    selectedVideo ? styles.nowrap : styles.wrap
                }`}
            >
                <div className={styles.containerFlex}>
                    {selectedVideo && (
                        <div className={styles.selected}>
                            <section className={styles.videoDetail}>
                                <div className={styles.iframeArea}>
                                    <div className={styles.iframeWrapper}>
                                        <VideoDetail videoId={selectedVideo} />
                                    </div>
                                </div>
                            </section>
                            <section className={styles.videoComment}>
                                <CommentThread comments={comments} />
                            </section>
                        </div>
                    )}
                    <section className={styles.videoList}>
                        <VideoList
                            videos={videos}
                            onVideoClick={selectVideo}
                            displayType={selectedVideo ? 'nowrap' : 'wrap'}
                        />
                    </section>
                </div>
            </div>
        </>
    );
};

export default App;
