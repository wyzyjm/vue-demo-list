<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="你好阿"/>
    <hr>
    <h2>{{count}}</h2>
    <button type="button" @click="add">自增</button>

    <!-- vuex 方式 -->
    <h2>vuex 方法</h2>
    <h2>{{this.$store.state.count}}</h2>
    <button type="button" @click="addcount">自增</button>

  </div>
</template>

<script>
// 引入组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      count:0 // 多组件有用时再抽离
    }
  },
  methods:{
    // 老方法
    add(){
      this.count++
    },
    // vuex 自增方法
    addcount(){
      this.$store.commit('sum') // 触发mutations中的方法
    }
  }
  
}
</script>
