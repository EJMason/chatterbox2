import axios from 'axios';
import './config.js';

var getMessages = (callback) => {
    axios.get('https://api.parse.com/1/classes/messages', {
        params: { order: '-createdAt' }
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
        console.log(error);
        });
};

export default getMessages;