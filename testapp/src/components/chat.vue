<template>
  <div class="chat">
    <h2 class="title">{{ userinfo.name }}</h2>
    <!-- 聊天列表 -->
    <div class="chartlist">
      <chatlist
        v-for="(item, index) in chatinfolist"
        :key="index"
        :listinfo="item"
      >
        {{ item.usersay }}
      </chatlist>
    </div>
    <!-- 输入框 -->
    <chatinput :sendContent="setContent"></chatinput>
  </div>
</template>

<script>
import chatinput from "@/components/chatinput";
import chatlist from "@/components/chatlist";
export default {
  props: {
    userinfo: {
      type: Object,
      requiretd: true,
    },
  },
  components: {
    chatinput,
    chatlist,
  },
  data() {
    return {
      chatinfolist: [
        {
          name: "小明",
          useravatar: require("@/assets/img/avatar/pig.jpg"),
          usersay: "你好阿",
        },
      ],
    };
  },
  methods: {
    // 设置聊天列表
    setContent(value) {
      var contentObj = {
        name: this.userinfo.name,
        useravatar: this.userinfo.avatar,
        usersay : value
      };
      this.chatinfolist.push(contentObj);
    },
  },
};
</script>

<style scoped>
.chat {
  flex: 1;
}
.title {
  padding-left: 10px;
  border-bottom: 1px solid #000;
  border-bottom: 1px solid #000;
}
</style>
