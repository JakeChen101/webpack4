<template>
    <footer class="jk-footer">
        <router-link v-for="item in tabList" :key="item.id" :to="item.link">
            <i :class="item.tabIcon"></i>
            <p class="tab-word">{{item.name}}</p>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "JkFooter",
        data () {
            return {
                tabList: [
                    {id: 1, name: '首页', link: '/home', tabIcon: 'home-icon'},
                    {id: 2, name: '产品', link: '/product', tabIcon: 'product-icon'},
                    {id: 3, name: '发现', link: '/found', tabIcon: 'found-icon'},
                    {id: 4, name: '我的', link: '/my', tabIcon: 'my-icon'},
                ]
            }
        }
    }
</script>

<style scoped>
    .jk-footer{
        display: flex;
        align-items: center;
        z-index: 999;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-color: yellowgreen
    }
    .jk-footer a{
        flex: 1 0 auto;
        text-align: center;
        font-size: 28px;
    }
    .jk-footer i{
        display: inline-block;
        width: 40px;
        height: 40px;
    }
    .jk-footer .home-icon{
        background: url("../assets/images/logo.png") no-repeat center / 100%;
    }
    .jk-footer .router-link-active .home-icon{
        background: url("../assets/images/icon_square.png") no-repeat  center / 100%;
    }
    .jk-footer .product-icon{
        background: url("../assets/images/logo.png") no-repeat  center / 100%;
    }
    .jk-footer .router-link-active .product-icon{
        background: url("../assets/images/icon_square.png") no-repeat  center / 100%;
    }
    .jk-footer .found-icon{
        background: url("../assets/images/logo.png") no-repeat  center / 100%;
    }
    .jk-footer .router-link-active .found-icon{
        background: url("../assets/images/icon_square.png") no-repeat  center / 100%;
    }
    .jk-footer .my-icon{
        background: url("../assets/images/logo.png") no-repeat  center / 100%;
    }
    .jk-footer .router-link-active .my-icon{
        background: url("../assets/images/icon_square.png") no-repeat  center / 100%;
    }
    .jk-footer .tab-word{
        padding-top: 6px;
        font-size: 28px;
        color: #333;
    }
    .jk-footer .router-link-active .tab-word{
        color: red;
    }
</style>
