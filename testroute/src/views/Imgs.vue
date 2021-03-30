<template>
  <div class="imgs">
      <img :src="url" alt="">
  </div>
</template>

<script>
export default {
    data (){
        return {
            url :require('@/assets/logo.png')
        }
    }
}
</script>

<style>

</style>