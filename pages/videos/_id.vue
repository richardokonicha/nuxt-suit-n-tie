<template>
  <nuxt-child :video="video" />
</template>

<script>
export default {
  async asyncData(context) {
    const result = await context.$axios.get(
      `http://localhost:8081/videos/${context.params.id}`,
    );
    return {
      video: result.data,
    };
  },
};
</script>
