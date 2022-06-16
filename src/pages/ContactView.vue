<script setup lang="ts">
import { ref, reactive } from 'vue';
import { FormType } from 'src/RadicalTypes';
import axios from 'axios';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const formDetails = reactive({}) as FormType;

const onSubmit = () => {
  formDetails.firstName = firstName.value;
  formDetails.lastName = lastName.value;
  formDetails.email = email.value;
  formDetails.message = message.value;
  axios
    .post('http://localhost:3000/messages', formDetails)
    .then(function (promise) {
      if (promise) {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        message.value = '';
        alert('Your message has been received. Wait patiently for a reply.');
      }
    })
    .catch(function (error) {
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';
      alert(
        'Sorry, there was an error.' +
          error +
          '. Please wait until the problem is fixed and come back'
      );
    });
};
</script>

<template>
  <q-page class="row inline items-center justify-evenly">
    <div class="q-pa-md">
      <div class="col-12">
        <h1 class="romade-italic text-center gt-xs">Contact Form</h1>
        <h3 class="romade-italic text-center lt-sm">Contact Form</h3>
      </div>
      <div class="col-12">
        <h6 class="text-center">
          To Those that have web development inquiries, please refer them to
          <a href="https://sociallyradicalwebdesign.com"
            >Socially Radical Web Design </a
          >.
        </h6>
      </div>
      <q-form @submit.prevent="onSubmit">
        <q-input
          name="firstname"
          label="First Name"
          type="text"
          v-model="firstName"
          bg-color="black"
          label-color="white"
          filled
          dark
          color="white"
          required
        ></q-input>
        <q-input
          name="lastname"
          label="Last Name"
          type="text"
          v-model="lastName"
          bg-color="black"
          label-color="white"
          filled
          dark
          color="white"
          required
        ></q-input>
        <q-input
          name="email"
          label="Email"
          type="email"
          v-model="email"
          bg-color="black"
          label-color="white"
          filled
          dark
          color="white"
          required
        ></q-input>
        <q-input
          name="Email Message"
          label="Message"
          type="textarea"
          v-model="message"
          bg-color="black"
          label-color="white"
          filled
          dark
          color="white"
          required
        ></q-input>
        <q-btn
          no-caps
          class="romade-italic text-h4"
          label="Submit"
          type="submit"
          color="black"
        ></q-btn>
      </q-form>
      <div class="col-12">
        <h1 class="romade-italic text-center gt-xs">
          Message from our Sponsors
        </h1>
        <h3 class="romade-italic text-center lt-sm">
          Message from our Sponsors
        </h3>
      </div>
      <div class="col-12">
        <q-video
          src="https://rumble.com/embed/vybvym/?pub=4"
          :ratio="16 / 9"
        ></q-video>
      </div>
    </div>
  </q-page>
</template>
