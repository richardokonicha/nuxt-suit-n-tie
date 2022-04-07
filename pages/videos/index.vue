<template>
  <div>
    <h1>Videos - opor</h1>
    <div v-for="video in videos" v-bind:key="video.id">
      {{ video.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideosPage',
  data() {
    return {
      videos: [
        { id: '16', name: 'Intro to NuxtJs' },
        { id: '17', name: 'Intro to VueJs' },
        { id: '18', name: 'Intro to Advanced Techniques' },
      ],
    };
  },
};
</script>
