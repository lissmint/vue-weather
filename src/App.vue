<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld class="bg-red-200" msg="Hello Vue 3 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: { HelloWorld },
  data: () => ({
    cityName: localStorage.getItem('city'),
    cityDetail: null,
  }),
  async mounted() {
    if (!this.cityName) {
      const res = await this.$api.getIP();
      const cityRes = await this.$api.getForecast(res.data.ip);
      this.cityDetail = cityRes.data.location;
      const { city } = this.cityDetail;
      localStorage.setItem('city', city);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
