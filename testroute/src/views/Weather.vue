<template>
  <div class="weather">
    <h2>
      <strong >城市 : </strong>
      <span class="skyblue"> {{ $route.params.city }}</span>
    </h2>
    <p>
      <strong >天气情况 : </strong>
      <span class="skyblue"> {{ weather.wea }}</span>
    </p>
    <!-- <img :src="weather.wea_img" alt="天气"> -->

    <p>
      <strong >当前星期 : </strong>
      <span class="skyblue"> {{ weather.week }}</span>
    </p>
    <p>
      <strong >气象台更新时间 : </strong>
      <span class="skyblue"> {{ weather.update_time }}</span>
    </p>
    <p>
      <strong >城市名称 : </strong>
      <span class="skyblue"> {{ weather.city }}</span>
    </p>
    <p>
      <strong >城市英文名称 : </strong>
      <span class="skyblue"> {{ weather.cityEn }}</span>
    </p>
    <p>
      <strong >国家名称 : </strong>
      <span class="skyblue"> {{ weather.country }}</span>
    </p>
    <p>
      <strong >国家英文名称 : </strong>
      <span class="skyblue"> {{ weather.countryEn }}</span>
    </p>
    <p>
      <strong >实时温度 : </strong>
      <span class="skyblue"> {{ weather.tem }}</span>
    </p>
    <p>
      <strong >高温 : </strong>
      <span class="skyblue"> {{ weather.tem1 }}</span>
    </p>
    <p>
      <strong >低温 : </strong>
      <span class="skyblue"> {{ weather.tem2 }}</span>
    </p>
    <p>
      <strong >风向 : </strong>
      <span class="skyblue"> {{ weather.win }}</span>
    </p>
    <p>
      <strong >风力等级 : </strong>
      <span class="skyblue"> {{ weather.win_speed }}</span>
    </p>
    <p>
      <strong >湿度 : </strong>
      <span class="skyblue"> {{ weather.humidity }}</span>
    </p>
    <p>
      <strong >空气质量 : </strong>
      <span class="skyblue"> {{ weather.air }}</span>
    </p>
    <p>
      <strong >空气质量等级 : </strong>
      <span class="skyblue"> {{ weather.air_level }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {},
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      let url = `https://v0.yiketianqi.com/api?version=v61&appid=82797537&appsecret=wIG3HMUL&city=${this.$route.params.city}`;
      const { data: res } = await this.http.get(url);
      console.log(res);
      this.weather = res;
    },
  },
};
</script>

<style scoped>
.skyblue {
    color: rgb(40, 187, 27);
}
</style>