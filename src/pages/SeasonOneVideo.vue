<script setup lang="ts">
import FullVideosSeasonOneVue from 'src/components/FullVideosSeasonOne.vue';
import ExtrasVideoSeasonOneVue from 'src/components/ExtrasVideoSeasonOne.vue';
import SeasonOneInterViewsVue from 'src/components/SeasonOneInterViews.vue';
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <full-videos-season-one-vue></full-videos-season-one-vue>
    <extras-video-season-one-vue></extras-video-season-one-vue>
    <season-one-inter-views-vue></season-one-inter-views-vue>
  </q-page>
</template>
