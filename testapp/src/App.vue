<template>
  <div id="app">
    <!-- 登录 -->
    <Login></Login>

    <div class="liao">
      <!-- 聊天框 -->
      <chat-com :userinfo="currentUser"></chat-com>
      <!-- 用户列表 -->
      <userlist-com
        :userlist="userlist"
        @chooseUser="toggleUser"
      ></userlist-com>
    </div>
    <!-- 弹窗 -->
    <button type="button" @click="isShow = true"> 展示弹窗</button>
    <Dialog
      v-if="isShow"
      :title="title"
      :closePop="closeDialog"
      :confirmFn="linkFn"
    >
      <h3>概要</h3>
      <p>lksfjaldksjflaksfklasdnfkladns</p>
      <input type="text" placeholder="请输入内容" />
    </Dialog>
  </div>
</template>

<script>
import Login from "@/components/Login";
import chatCom from "@/components/chat";
import userlistCom from "@/components/userList";
import Dialog from "@/components/Dialog";
export default {
  name: "App",
  // 添加子组件
  components: {
    Login,
    chatCom,
    userlistCom,
    Dialog,
  },
  data() {
    return {
      title: "隔壁老王",
      userlist: [
        {
          id: 1,
          name: "小明",
          avatar: require("./assets/img/avatar/pig.jpg"),
        },
        {
          id: 2,
          name: "小花",
          avatar: require("./assets/img/avatar/卡通袜.jpg"),
        },
        {
          id: 3,
          name: "小新",
          avatar: require("./assets/img/avatar/蜡笔小新.jpg"),
        },
        {
          id: 4,
          name: "小女",
          avatar: require("./assets/img/avatar/卡通女.jpg"),
        },
      ],
      // 当前用户信息
      currentUser: {
        id: 1,
        name: "小明",
        avatar: require("./assets/img/avatar/pig.jpg"),
      },
      isShow: false,
    };
  },
  methods: {
    // 切换用户
    toggleUser(index) {
      this.currentUser = this.userlist[index];
    },
    // 关闭弹窗
    closeDialog() {
      this.isShow = false;
    },
    // 弹窗确认地址
    linkFn() {
      window.location.href = "http://www.baidu.com";
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-wrap: wrap;
}
.liao {
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  border: 1px solid #000;
}
</style>
