<template>
  <nuxt-child :video="video" />
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { id: '16', name: 'Intro to NuxtJs' },
        { id: '17', name: 'Intro to VueJs' },
        { id: '18', name: 'Intro to Advanced Techniques' },
      ],
    };
  },

  computed: {
    video() {
      return this.videos.find((video) => video.id === this.$route.params.id);
    },
  },
};
</script>
