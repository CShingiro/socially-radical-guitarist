import { defineStore } from 'pinia';
import ContactService from 'src/services/ContactService';
import { FormType } from 'src/RadicalTypes';

export const useFormStore = defineStore('form-store', {
  state: () => ({
    formData: {} as FormType,
  }),
  actions: {
    createMessage(message: FormType) {
      this.formData = message;
      ContactService.getMessages()
        .then((promise) => {
          promise.data.push(message);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
