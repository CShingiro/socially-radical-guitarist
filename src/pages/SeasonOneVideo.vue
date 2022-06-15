<script setup lang="ts">
import ClipsOrVideosVue from 'src/components/ClipsOrVideos.vue';
import {
  fullEpisodeSeasonOne,
  pastInterviewsSeasonOne,
  extraClipsSeasonOne,
} from 'src/RadicalVideo';
const episodesOne = fullEpisodeSeasonOne;
const interviewsOne = pastInterviewsSeasonOne;
const extrasOne = extraClipsSeasonOne;
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season One Episodes</h1>
      <h4 class="romade-italic text-center lt-sm">Season One Episodes</h4>
    </div>
    <clips-or-videos-vue
      v-for="(episode, id) in episodesOne"
      :key="id"
      :content="episode"
    ></clips-or-videos-vue>
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Past Interviews</h1>
      <h4 class="romade-italic text-center lt-sm">Past Interviews</h4>
    </div>
    <clips-or-videos-vue
      v-for="(episode, id) in interviewsOne"
      :key="id"
      :content="episode"
    ></clips-or-videos-vue>
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Past Show Clips</h1>
      <h4 class="romade-italic text-center lt-sm">Past Show Clips</h4>
    </div>
    <clips-or-videos-vue
      v-for="(extra, id) in extrasOne"
      :key="id"
      :content="extra"
    ></clips-or-videos-vue>
  </q-page>
</template>
