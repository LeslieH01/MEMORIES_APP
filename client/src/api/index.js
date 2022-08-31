import axios from 'axios';

/** ce url point sur la route de notre backend */
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);