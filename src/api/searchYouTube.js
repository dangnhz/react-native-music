import axios from 'axios';
import selectRandomKey from '../utils/selectRandomKey';

export default function searchYouTube(query) {
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      videoCategoryId: '10',
      type: 'video',
      maxResults: 20,
      key: 'AIzaSyDZOIm-CJNqYIa6Bi2WxGKFNTSCP7jT0o8',
      q: query,
    },
  });
}
