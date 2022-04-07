<template>
  <div>
    <div>we are in editting video {{ $route.params.id }}</div>
    <div>Edit: {{ video.name }}</div>
    <nuxt-link :to="`/videos/${video.id}`"
      ><button>Go back to {{ video.id }}</button></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>
