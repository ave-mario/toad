import axios from 'axios';

function getPosts() {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data);
}
export default getPosts;
