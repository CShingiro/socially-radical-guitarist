<script setup lang="ts">
import SongsOnShowListVue from 'src/components/SongsOnShowList.vue';
import ClipsOrVideosVue from 'src/components/ClipsOrVideos.vue';
import { audioListSeasonOne, clipsMusicSeasonOne } from 'src/RadicalAudio';

const songsOne = audioListSeasonOne;

const clipsOne = clipsMusicSeasonOne;
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season One Music</h1>
      <h4 class="romade-italic text-center lt-sm">Season One Music</h4>
    </div>
    <songs-on-show-list-vue
      v-for="(song, id) in songsOne"
      :key="id"
      :audio="song"
      :number="id + 1"
    ></songs-on-show-list-vue>
    <div class="col-12">
      <h1 class="romade-italic text-center gt-xs">Season One Clips</h1>
      <h4 class="romade-italic text-center lt-sm">Season One Clips</h4>
    </div>
    <clips-or-videos-vue
      v-for="(clip, id) in clipsOne"
      :key="id"
      :content="clip"
    ></clips-or-videos-vue>
  </q-page>
</template>
