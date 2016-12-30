import axios from 'axios';

var getMessages = (callback) => {
    axios.get('https://api.parse.com/1/classes/messages', {
        data: 'order=-createdAt'
    })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
        console.log(error);
        });
};

export default getMessages;