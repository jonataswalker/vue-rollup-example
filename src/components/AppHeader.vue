<template>
  <h1 class="header">{{ title }}</h1>
</template>

<style>
  .header {
    padding: 10px 0;
  }
</style>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: { type: String, default: '' }
  }
};
</script>
