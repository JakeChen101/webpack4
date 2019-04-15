const Login = () => import(/* webpackChunkName: "modules/login" */ '../views/Login');
const Home = () => import(/* webpackChunkName: "modules/home" */ '../views/home/Home');
const HomeHotProduct = () => import(/* webpackChunkName: "modules/homeHotProduct" */ '../views/home/HomeHotProduct');
const Product = () => import(/* webpackChunkName: "modules/product" */ '../views/product/Product');
const Found = () => import(/* webpackChunkName: "modules/found" */ '../views/found/Found');
const My = () => import(/* webpackChunkName: "modules/my" */ '../views/my/My');

export default [
    {path: '/', redirect: '/home'},
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},
    {path: '/home', name: 'Home', component: Home, meta: {title: '首页'}},
    {path: '/hotPro', name: 'HotProduct', component: HomeHotProduct, meta: {title: '热门产品'}},
    {path: '/product', name: 'Product', component: Product, meta: {title: '产品列表'}},
    {path: '/found', name: 'Found', component: Found, meta: {title: '发现'}},
    {path: '/my', name: 'My', component: My, meta: {title: '我的'}},
]
