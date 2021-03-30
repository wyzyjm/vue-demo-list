<template>
  <div class="home">
    <h3>首页</h3>

    <p><button @click="logthis">输出this</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    logthis() {
      console.log(this);
    },
  },
};
</script>

<style>
</style>