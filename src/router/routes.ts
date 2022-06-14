import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutView.vue') },
      {
        path: 'pastshows/',
        component: () => import('pages/PastShows.vue'),
      },
      {
        path: 'pastshows/season1',
        component: () => import('pages/SeasonOne.vue'),
      },
      {
        path: 'pastshows/season2',
        component: () => import('pages/SeasonTwo.vue'),
      },
      {
        path: 'pastshows/season1/audio',
        component: () => import('pages/SeasonOneAudio.vue'),
      },
      {
        path: 'pastshows/season1/video',
        component: () => import('pages/SeasonOneVideo.vue'),
      },
      {
        path: 'pastshows/season2/audio',
        component: () => import('pages/SeasonTwoAudio.vue'),
      },
      {
        path: 'pastshows/season2/video',
        component: () => import('pages/SeasonTwoVideo.vue'),
      },
      { path: 'contact', component: () => import('pages/ContactView.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
