<template>
  <div class="state">
    <h1>state 页面</h1>
    <hr />
    <!-- 方式二 -->
    <!-- <input type="number" :placeholder="age" :value="age" @input="changeVal" /> -->
    <!-- 方式三 -->
    <!-- <h2>姓名 : {{ name }}</h2>
    <h2>{{ pjcolors }}</h2>
    <h2>年龄 : {{ age }}</h2>
    <h2>数量 : {{ count }}</h2> -->
    <!-- 方式四 -->
    <h2>姓名 : {{ name }}</h2>
    <h2>颜色 : {{ reversColor }}</h2>
    <h2>年龄 : {{ age }}</h2>
    <h2>数量 : {{ count }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      colors: "red",
    };
  },
  // 计算属性
  // computed: {
  // 方式一:
  // name() {
  //   return this.$store.state.name;
  // },
  // age: {
  //   get() {
  //     return this.$store.state.age;
  //   },
  //   set(val) {
  //     this.$store.commit("setAge", val);
  //   },
  // },
  // count() {
  //   return this.$store.state.count;
  // },
  // },

  // 方式二:
  // computed:mapState(['name','age','count']),
  // methods:{
  //   changeVal(e){
  //     this.$store.commit('setAge',e.target.value)
  //   }
  // },

  // 方式三
  // computed: mapState({
  //   name: "name",
  //   age: (state) => state.age,
  //   count: "count",
  //   pjcolors: function (satate) {
  //     return satate.name + this.colors;
  //   },
  // }),

  // 方式四
  computed: {
    reversColor() {
      return this.colors.split("").reverse().join("");
    },
    ...mapState({
      name: "name",
      age: (state) => state.age,
      count: "count",
      pjcolors: function (satate) {
        return satate.name + this.colors;
      },
    }),
  },
};
</script>

<style>
</style>