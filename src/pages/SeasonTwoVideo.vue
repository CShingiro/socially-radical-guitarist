<script setup lang="ts">
import ClipsOrVideosVue from 'src/components/ClipsOrVideos.vue';
import {
  fullEpisodeSeasonTwo,
  pastInterviewsSeasonTwo,
} from 'src/RadicalVideo';

const episodesTwo = fullEpisodeSeasonTwo;

const interviewsTwo = pastInterviewsSeasonTwo;
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season Two Episodes</h1>
      <h4 class="romade-italic text-center lt-sm">Season Two Episodes</h4>
    </div>
    <clips-or-videos-vue
      v-for="(episode, id) in episodesTwo"
      :key="id"
      :content="episode"
    ></clips-or-videos-vue>
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Past Interviews</h1>
      <h4 class="romade-italic text-center lt-sm">Past Interviews</h4>
    </div>
    <clips-or-videos-vue
      v-for="(interview, id) in interviewsTwo"
      :key="id"
      :content="interview"
    ></clips-or-videos-vue>
  </q-page>
</template>
