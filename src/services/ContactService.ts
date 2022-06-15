import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://sociallyradicalguitarist.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getMessages() {
    return await apiClient.get('/messages/');
  },
};
