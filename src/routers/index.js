import routers from './configs'

const vueRouter = new VueRouter({
    mode: 'history',
    routes: routers,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

vueRouter.beforeEach((to, from, next) => {
    document.title = to.meta.title;   //title修改
    if(navigator.onLine){
        next();
    }else{
        console.log('您的网络已断开连接！')
        next(false)
    }
});

// vueRouter.afterEach((to ,from) => {});

export default vueRouter
