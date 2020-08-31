import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID L-mxEgieoh3TzlnYwaS_8SAsGCC1FbzrKRPaTjllF9M'
        }

});