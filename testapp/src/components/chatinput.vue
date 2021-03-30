<template>
  <div>
    <input
      type="text"
      placeholder="请输入聊天信息"
      v-model="content"
      @keydown.enter="send"
    />
    <button type="button" @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props: {
    sendContent: {
      type: Function,
    },
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    send() {
      if(!this.content.trim()) return  false; // 如果内容为空, 则阻止
      this.sendContent(this.content); // 添加内容
      this.content = ""; // 输入框清空
    },
  },
};
</script>

<style>
</style>