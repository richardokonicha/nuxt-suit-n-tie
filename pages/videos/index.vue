<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in videos" v-bind:key="video.id">
      <nuxt-link :to="`/videos/${video.id}`"
        >{{ video.id }}: {{ video.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideosPage',
  async asyncData(context) {
    let result = await context.$axios.get('http://localhost:8081/videos');
    return { videos: result.data };
  },
};
</script>
