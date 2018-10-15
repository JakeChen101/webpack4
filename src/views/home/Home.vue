<template>
    <view-main>
        <jk-header slot="jkHeader">My</jk-header>
        <div class="home">
            <router-link :to="'/hotPro'">热门产品</router-link>
            <router-link :to="'/found'">发现</router-link>
        </div>
        <jk-footer slot="jkFooter"></jk-footer>
    </view-main>
</template>

<script>
    import { getNewList } from '../../api/root'

    export default {
        name: "Home",
        data () {
            return {
                show: true
            }
        },
        created () {
            console.log(process.env.NODE_ENV)
            // getNewList().then(res => {
            //     console.log(res)
            // })
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
