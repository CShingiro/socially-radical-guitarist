<script setup lang="ts">
import { Audio } from 'src/RadicalTypes';

const props = defineProps<{
  audio: Audio;
  number: number;
}>();

props.audio;
props.number;
</script>

<template>
  <q-card class="bg-black" dark>
    <q-card-section>
      <div class="text-h6 romade-italic">Episode {{ number.toString() }}</div>
    </q-card-section>
    <q-card-section>
      <q-video
        :src="audio.firstSongLink"
        :title="audio.firstSongName"
      ></q-video>
    </q-card-section>
    <q-card-section>
      <div class="text-h6 romade-italic">
        {{ audio.firstSongName }} by {{ audio.firstSongArtist }}
      </div>
    </q-card-section>
    <q-card-section>
      <q-video
        :src="audio.secondSongLink"
        :title="audio.secondSongName"
      ></q-video>
    </q-card-section>
    <q-card-section>
      <div class="text-h6 romade-italic">
        {{ audio.secondSongName }} by {{ audio.secondSongArtist }}
      </div>
    </q-card-section>
    <q-card-section>
      <q-video
        :src="audio.thirdSongLink"
        :title="audio.thirdSongName"
      ></q-video>
    </q-card-section>
    <q-card-section>
      <div class="text-h6 romade-italic">
        {{ audio.thirdSongName }} by {{ audio.thirdSongArtist }}
      </div>
    </q-card-section>
    <q-card-section v-if="audio.fourthSongLink">
      <q-video
        :src="audio.fourthSongLink"
        :title="audio.fourthSongName"
      ></q-video>
    </q-card-section>
    <q-card-section v-if="audio.fourthSongArtist">
      <div class="text-h6 romade-italic">
        {{ audio.fourthSongName }} by {{ audio.fourthSongArtist }}
      </div>
    </q-card-section>
  </q-card>
</template>
