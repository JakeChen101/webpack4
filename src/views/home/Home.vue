<template>
  <view-main>
    <jk-header slot="jkHeader">My</jk-header>
    <div class="home">
      <router-link :to="'/hotPro'">热门产品</router-link>
      <router-link :to="'/found'">发现</router-link>
      <img src="../../assets/images/1.jpg">
    </div>
    <jk-footer slot="jkFooter"></jk-footer>
  </view-main>
</template>

<script>
  import { getNewList, getImg } from '../../api/root'

  export default {
    name: "Home",
    data () {
      return {
        show: true
      }
    },
    created () {
      console.log(process.env.NODE_ENV);
      getImg({imgCode: 5334}).then(res => {
        console.log(res)
      })
    },
    methods: {
      onLogin () {
        this.$router.push({path: '/login'})
      },
    }
  }
</script>

<style scoped>
  .home{color: green}
</style>
