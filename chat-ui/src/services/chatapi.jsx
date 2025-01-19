import axios from "axios";

const api = axios.create({
    baseURL: '/api/',
});

const chatAPI = {
    getMessages: (groupId) => {
        console.log('Calling get messages from API');
        return api.get(`messages/${groupId}`);
    },

    sendMessages: (username, text) => {
        let msg = {
            sender: username,
            content: text
        }
        return api.post(`send`, msg);
    }
}

export default chatAPI;