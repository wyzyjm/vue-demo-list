<template>
  <div class="news">
    <h2>{{ this.$route.name }}</h2>
    新闻页面 {{ this.$route.params.id }}
    <p>{{ $route.path }}</p>


    <!-- 子路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>