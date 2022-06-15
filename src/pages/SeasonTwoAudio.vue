<script setup lang="ts">
import SongsOnShowListVue from 'src/components/SongsOnShowList.vue';
import ClipsOrVideosVue from 'src/components/ClipsOrVideos.vue';
import { audioListSeasonTwo, clipsMusicSeasonTwo } from 'src/RadicalAudio';

const songsTwo = audioListSeasonTwo;

const clipsTwo = clipsMusicSeasonTwo;
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season Two Music</h1>
      <h4 class="romade-italic text-center lt-sm">Season Two Music</h4>
    </div>
    <songs-on-show-list-vue
      v-for="(song, id) in songsTwo"
      :key="id"
      :audio="song"
      :number="id + 1"
    ></songs-on-show-list-vue>
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season Two Clips</h1>
      <h4 class="romade-italic text-center lt-sm">Season Two Clips</h4>
    </div>
    <clips-or-videos-vue
      v-for="(clip, id) in clipsTwo"
      :key="id"
      :content="clip"
    ></clips-or-videos-vue>
  </q-page>
</template>
