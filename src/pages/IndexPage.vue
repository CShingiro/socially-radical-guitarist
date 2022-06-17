<script setup lang="ts">
import HomePageItems from 'src/components/HomePageItems.vue';
</script>

<template>
  <q-page
    class="row inline items-center justify-evenly q-pa-md q-gutter-md gt-xs"
  >
    <home-page-items></home-page-items>
  </q-page>
  <q-page class="row inline items-center justify-evenly lt-sm">
    <home-page-items></home-page-items>
  </q-page>
</template>
