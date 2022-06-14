<script setup lang="ts">
interface Links {
  title: string;
  caption: string;
  link: string;
  icon: string;
}

const props = withDefaults(defineProps<Links>(), {
  caption: '',
  link: '#',
  icon: '',
});

props.title;
props.caption;
props.link;
props.icon;
</script>

<template>
  <q-item :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
