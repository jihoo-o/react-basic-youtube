class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                regionCode: 'KR',
            },
        });
        return response.data.items;
    }

    async videoComment(videoId) {
        const response = await this.youtube.get('commentThreads', {
            params: {
                part: 'snippet',
                videoId,
                maxResults: 25,
                order: 'relevance',
            },
        });
        return response.data.items;
    }

    async search(q) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                q,
                type: 'video',
            },
        });
        return response.data.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
    }
}

export default Youtube;
