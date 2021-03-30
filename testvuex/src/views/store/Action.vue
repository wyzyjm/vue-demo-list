<template>
  <div class="action">
    <h2>天气预报</h2>
    <p v-for="(val, key) in weather" :key="key">
      <strong>{{ key }} : </strong>
      <span class="skyblue"> {{ val }}</span>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getWeather("北京");
  },
  computed: {
    ...mapState(["weather"]), // 获取 state中的值
    
  },
  methods: {
    ...mapActions(["getWeather"]), // 获取 actions中的异步方法
  },
};
</script>

<style>
</style>