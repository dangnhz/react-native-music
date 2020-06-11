import axios from 'axios';

// const url = 'https://server.ylight.xyz/song';
const url = 'http://localhost:5000/video';

export default function getVideoLink(videoId) {
  return axios.get(url, {
    params: {
      v: videoId,
    },
  });
}
