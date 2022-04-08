<template>
  <nuxt-child :video="video" />
</template>

<script>
export default {
  head() {
    return {
      title: this.video.name,
    };
  },
  async asyncData({ $axios, params }) {
    const result = await $axios.get(`/videos/${params.id}`);
    return {
      video: result.data,
    };
  },
};
</script>
1W
