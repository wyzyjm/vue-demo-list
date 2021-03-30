<template>
  <div class="store">
    <!-- 导航 -->
    <div class="nav">
      <router-link :to="{name:'state'}">state</router-link> |
      <router-link :to="{name:'getter'}">getter</router-link> |
      <router-link :to="{name:'action'}">action</router-link> 
    </div>
    <!-- 视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>