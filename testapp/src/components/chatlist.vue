<template>
  <div class="chatitem">
    <img :src="listinfo.useravatar" :alt="listinfo.name" :style = "styleObj" />
    <div>
      <!-- 可用插槽 也可用内容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listinfo: {
      type: Object,
    },
  },
  data(){
    return {
      styleObj:{
        width:"50px",
        height:"50px",
        paddingRight:"20px"
      }
    }
  }
};
</script>

<style scoped>
.chatitem {
  display: flex;
  align-items: center;
}
</style>