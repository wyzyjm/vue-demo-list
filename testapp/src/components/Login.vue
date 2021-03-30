<template>
    <div class="login">
        <form action="#" method="POST" class="loginform">
            <!-- 用户名 -->
            <div class="inputbox">
                <label for="username">用户名</label>
                 <!-- autocomplete="off" -->
                <input type="text" id="username" v-model="username" placeholder="请输入用户名">
                <span class="valideTip">用户名校验提示</span>
            </div>

            <!-- 密码 -->
            <div class="inputbox">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="password" placeholder="请输入密码">
                <span class="valideTip error">密码校验提示</span>
            </div>

            <!-- 提交按钮 -->
            <button type="submit" @click="login" class="loginbtn">登录</button>
        </form>

    </div>
</template>

<script>
export default {
    props: {

    },
    // 数据
    data() {
        return {
            username :"",
            password:""
        };
    },
    // 方法
    methods: {
        // 登录
        login(){
            var loginObj = {
                username: this.username,
                password: this.password
            }
            // 1. 表单校验
            // 2. 失败 : 提示
            // 3. 成功:  发送登录请求
            // 4. 判断请求是否成功
            // 5. 失败 : 进行提示
            // 6. 成功 : 清空表单,存储令牌,页面跳转 
        }
    },
    // 监控
    watch: {

    },
    // 计算属性
    computed: {

    },
    // 组件
    components: {

    },
};
</script>

<style scoped>
.login {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginform {
    width: 500px;
}
.inputbox {
    margin: 10px 0;
}
.inputbox label {
    position: relative;
    display: inline-block;
    width:80px;
    text-align: right;
    padding-right: 5px;
    margin-right:5px
}
.inputbox label::after {
    content:":";
    position: absolute;
    right:0
}
.valideTip{
    margin-left: 10px;
    font-size:12px;
    color:green
}
.valideTip.error {
    color:red
}
.loginbtn{
    display: block;
    margin: 10px auto ;
    background-color: skyblue;
    border:none;
    padding:10px 25px; 
    border-radius: 5px;
    width: 60%;
}
</style>
