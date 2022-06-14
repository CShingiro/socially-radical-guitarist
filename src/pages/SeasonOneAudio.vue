<script setup lang="ts">
import SongsOnShowListVue from 'src/components/SongsOnShowList.vue';
import ClipsOrVideosVue from 'src/components/ClipsOrVideos.vue';
</script>

<template>
  <q-page class="row inline items-center justify-center">
    <songs-on-show-list-vue></songs-on-show-list-vue>
    <clips-or-videos-vue></clips-or-videos-vue>
    <clips-or-videos-vue></clips-or-videos-vue>
  </q-page>
</template>
