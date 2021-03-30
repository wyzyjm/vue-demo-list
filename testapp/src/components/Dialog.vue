<template>
  <div class="pop" @click="popClose">
    <div class="content">
      <button class="btn close" @click="closePop">关闭</button>
      <!-- 标题 -->
      <h2 class="title">{{ title }}</h2>
      <!-- 内容 可以自定义 -->
      <div class="info">
        <slot></slot>
      </div>
      <!-- 按钮区域 -->
      <div class="btnbox">
        <button class="btn cancel" @click="closePop">取消</button>
        <button class="btn confirm" @click="confirmFn">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 弹窗 标题
    title: {
      type: String,
      required: true,
    },
    // 关闭事件
    closePop: {
      type: Function,
      required: true,
    },
    // 确认事件
    confirmFn: {
      type: Function,
      required: true,
    },
  },
  methods: {
    //   点击空白,关闭弹窗
    popClose(e) {
      /**
       * 1. 获取弹窗
       * 2. 判断 是否有弹窗, 并且弹窗 不包含 点击的目标
       * 3. true 则 执行 关闭弹窗事件
       */
      console.log(e);

      const pop = document.querySelector(".content");
      if (pop && !pop.contains(e.target)) {
        this.closePop();
      }
    },
  },
};
</script>

<style scoped>
.pop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}

.info {
  width: 100%;
  padding: 20px;
  margin: 30px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.btnbox {
  width: 100%;
  text-align: right;
  padding-right: 50px;
}
.btn {
  margin: 0 10px;
  background-color: skyblue;
  border: 0;
  padding: 5px 20px;
  border-radius: 4px;
  color: #fff;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: red;
}
</style>