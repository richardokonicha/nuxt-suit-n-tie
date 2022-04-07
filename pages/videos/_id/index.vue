<template>
  <div>
    <h1>Page one</h1>
    we are in video {{ video.id }}
    <p>{{ video.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>
