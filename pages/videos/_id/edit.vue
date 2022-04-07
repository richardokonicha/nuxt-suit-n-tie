<template>
  <div>
    <div>we are in editting video {{ $route.params.id }}</div>
    <div>Edit: {{ video.name }}</div>
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>
