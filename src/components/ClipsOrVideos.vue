<script setup lang="ts">
import { Content } from 'src/RadicalTypes';

const props = defineProps<{
  content: Content;
}>();

props.content;
</script>

<template>
  <q-card class="bg-black" dark>
    <q-card-section>
      <q-video :src="content.link" :title="content.name"></q-video>
    </q-card-section>
    <q-card-section>
      <div class="text-h6 romade-italic">{{ content.name }}</div>
    </q-card-section>
  </q-card>
</template>
