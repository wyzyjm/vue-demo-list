<template>
  <div class="home">
    <van-nav-bar
      :title="posi.name"
      left-text="返回"
      right-text="按钮"
      left-arrow
    >
    </van-nav-bar>
    <hr />
    <span> {{ userInfo.id }} </span>
    <span> {{ userInfo.username }} </span>
    <span> {{ userInfo.age }} </span>
    <span> {{ userInfo.gender }} </span>
    <span> {{ userInfo.email }} </span>
    <hr />
    <h1 class="h1">首页</h1>
    <p>{{ msg }}</p>
    <p>{{ posi.msg }}</p>
    <hr />
  </div>
</template>

<script>
import { getBannerDate, getUserDate, getPosirDate } from "@/api/data.js";
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      userInfo: {},
      posi: "",
    };
  },
  async created() {
    // banner
    getBannerDate().then((res) => {
      this.msg = res.data.msg;
    });
    // 用户
    getUserDate().then((res) => {
      this.userInfo = res.data;
    });
    // 地理位置
    getPosirDate().then((res) => {
      this.posi = res.data;
    });
  },
};
</script>

<style>
.h1 {
  font-size: 2.5rem;
}
</style>
