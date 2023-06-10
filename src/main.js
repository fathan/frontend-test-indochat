import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@styles/main.scss';

import App from './App.vue';
import router from './router';

import Icon from '@components/Common/Icon';
import IconSquircle from '@components/Common/Icon/Global/Squircle.vue';
import IconFilter from '@components/Common/Icon/Global/Filter.vue';
import IconArrowLeft from '@components/Common/Icon/Global/ArrowLeft.vue';
import IconArrowRight from '@components/Common/Icon/Global/ArrowRight.vue';

/** Initialize App */
const app = createApp(App);

/** Pinia State Management */
app.use(createPinia());

/** Vue Router */
app.use(router);

/** Icon from Figma */
app.component('icon', Icon);
app.component('icon-squircle', IconSquircle);
app.component('icon-filter', IconFilter);
app.component('icon-arrow-left', IconArrowLeft);
app.component('icon-arrow-right', IconArrowRight);

/** Mount App */
app.mount('#app');
