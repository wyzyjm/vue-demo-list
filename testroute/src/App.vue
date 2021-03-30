<template>
  <div id="app">
    <!-- 导航 -->
    <div id="nav">
      <router-link to="/">Home | </router-link>
      <router-link to="/login"> Login | </router-link>
      <router-link to="/news"> News</router-link>
    </div>
    <hr />
    <!-- 视图 渲染 -->
    <router-view />
    <router-view name="A"></router-view>
    <router-view name="B"></router-view>
    <hr />
    <h2>编程式导航</h2>
    <button type="button" @click="goPath">路径跳转 - login</button>
    <button type="button" @click="goName">名称跳转 - Home</button>
    <button type="button" @click="goPramas">增加参数 - news</button>
    <p>
      <button type="button" @click="goPrev">前进</button>
      <button type="button" @click="goNext">后退</button>
    </p>
  </div>
</template>
<script>
export default {
  watch: {
    // 监听路由
    $route: function (val) {
      console.log("路由改变");
    },
  },
  methods: {
    // 路径跳转
    goPath() {
      this.$router.push({
        path: "/login", // 不能再加 paramas 了, 需使用 query
        query: {
          username: "laowang",
          password: "lwpassword",
        },
      });
    },
    // 名称跳转
    goName() {
      this.$router.push({
        name: "Home",
      });
    },
    // 增加参数
    goPramas() {
      this.$router.push({
        name: "News",
        params: {
          id: 123,
        },
      });
    },
    // 前进
    goPrev() {
      this.$router.go(1);
    },
    // 后退
    goNext() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#nav {
  text-align: center;
  margin: 20px 0;
}
</style>
