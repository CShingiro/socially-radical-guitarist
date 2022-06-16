import axios from 'axios';
import { FormType } from 'src/RadicalTypes';

const apiClient = axios.create({
  baseURL: 'https://sociallyradicalguitarist.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async sendMessages(item: FormType) {
    await apiClient.get('/messages/');
    apiClient.post('/messages/db.json', item);
  },
};
