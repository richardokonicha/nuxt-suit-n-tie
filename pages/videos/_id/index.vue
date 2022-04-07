<template>
  <div>
    <h1 class="text-xl">Page one</h1>
    we are in video {{ video.id }}
    <p>{{ video.name }}</p>
    <nuxt-link :to="`/videos/${video.id}/edit`"
      ><button>Edit</button></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>
