<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="img:/Images/SRGBanner.png"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-item to="/" active-class="white">
          <q-toolbar-title class="romade-italic gt-xs">
            Socially Radical Guitarist
          </q-toolbar-title>
        </q-item>
        <q-space class="gt-md" />
        <q-space class="gt-md" />
        <q-space class="gt-md" />
        <q-space class="gt-sm" />
        <q-space class="lt-sm" />
        <q-toolbar-title class="romade-italic gt-xs"
          >Brought to you by:</q-toolbar-title
        >
        <q-btn
          class="bg-white"
          aria-label="ACIC Canada Link"
          href="https://aciccanada.ca"
          target="_blank"
        >
          <q-icon name="img:/Images/logo.png"></q-icon>
        </q-btn>
        <q-btn
          aria-label="Radio Waterloo Link"
          href="https://radiowaterloo.ca"
          target="_blank"
        >
          <q-icon name="img:/Images/ckmsLogowordmark-128x56.png"></q-icon>
        </q-btn>
        <q-btn
          aria-label="Name Hero Link"
          href="https://nhtrx.com/?a=89&oc=2&c=4&s1="
          target="_blank"
        >
          <q-icon name="img:/Images/NameHeroLink.png"></q-icon>
        </q-btn>
        <q-btn
          aria-label="Socially Radical Web Design Link"
          href="https://sociallyradicalwebdesign.com"
          target="_blank"
        >
          <q-icon name="img:/Images/SRWBLogo.png"></q-icon>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" :="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-6">
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar class="bg-black">
        <q-btn
          href="https://www.facebook.com/SRGCKMS1027"
          target="_blank"
          aria-label="Facebook"
        >
          <q-icon name="facebook" color="white"></q-icon>
        </q-btn>
        <q-btn
          href="https://www.instagram.com/srgradio"
          target="_blank"
          aria-label="Instagram"
        >
          <q-icon name="ion-logo-instagram" color="white"></q-icon>
        </q-btn>
        <q-btn
          href="https://twitter.com/chris_shingiro"
          target="_blank"
          aria-label="Twitter"
        >
          <q-icon name="ion-logo-twitter" color="white"></q-icon>
        </q-btn>
        <q-btn
          href="https://rumble.com/c/c-1463251"
          target="_blank"
          aria-label="Rumble"
        >
          <q-icon name="ion-logo-youtube" color="white"></q-icon>
        </q-btn>
        <q-space />
        <q-btn
          no-caps
          class="romade-italic"
          href="https://en.wikipedia.org/wiki/Fair_dealing_in_Canadian_copyright_law"
          target="_blank"
          aria-label="Fair Use Copyright 2021 Socially Radical Guitarist"
        >
          <q-icon name="copyright" color="white"></q-icon>
          2021 - Fair Use - Socially Radical Guitarist
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    caption: 'Welcome Page',
    icon: 'ion-home',
    link: '/',
  },
  {
    title: 'About',
    caption: 'About the show and the host',
    icon: 'img:/Images/SRGLogo.svg',
    link: '/about',
  },
  {
    title: 'Past Shows',
    caption: 'Past Episodes',
    icon: 'ion-musical-notes',
    link: '/pastshows',
  },
  {
    title: 'Contact',
    caption: 'Contact the Show',
    icon: 'ion-mail',
    link: '/contact',
  },
];

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
