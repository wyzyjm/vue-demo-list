<template>
  <div class="btn">
    <!-- 按钮类型 -->
    <div class="btn-type">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <hr />
    <van-button type="info" plain>朴素按钮</van-button>
    <hr />
    <van-button type="info" disabled>禁用</van-button>
    <hr />
    <van-button type="info" plain hairline>细边框</van-button>
    <hr />
    <van-button type="info" loading>加载状态</van-button>
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />
    <hr />
    <van-button type="primary" square> 方形按钮</van-button>
    <van-button type="primary" round> 圆形按钮</van-button>
    <hr />
    <van-button type="primary" icon="plus" />
    <van-button type="primary" icon="plus">按钮</van-button>
    <van-button
      type="primary"
      icon="https://img01.yzcdn.cn/vant/user-active.png"
    >
      按钮
    </van-button>
  </div>
</template>

<script>
// import { Button } from "vant";
export default {
  components: {
    // "van-button": Button,
  },
};
</script>

<style>
</style>