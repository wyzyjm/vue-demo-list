<template>
  <div class="getter">
    <h2>getters 页面</h2>
    <hr />
    <p>msg反转 : {{ $store.getters.reverseMsg }}</p>
    <p>
        <strong>获取msg 日期</strong>
        {{getDate}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this);
  },
  computed:{
      ...mapGetters(['reverseMsg', 'getDate'])
  }
};
</script>

<style>
</style>