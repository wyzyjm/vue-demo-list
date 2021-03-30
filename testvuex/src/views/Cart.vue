<template>
  <div class="cart">
    <h1>购物车</h1>
    <h3>{{ this.$store.state.cart.num }}</h3>
    <ul>
        <li v-for="(item,index) in goodsList" :key="index">
            <strong> {{item.goods}} </strong>
            <span class="red">{{item.price}} </span>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    console.log(this);
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.cart.list,
    }),
  },
};
</script>

<style>
</style>