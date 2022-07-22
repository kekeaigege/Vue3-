import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/LoginPage.vue'
//异步加载=>import
const GoodsPage = () => import('../views/Goods/GoodPage.vue')
const AdvertPage = () => import('../views/Advert/AdvertPage.vue')
const OrderPage = () => import('../views/Order/OrderPage.vue')
const HomePage = () => import('../views/Home/HomePage.vue')
const ParamsPage = () => import('../views/Params/ParamsPage.vue')
const OrderBack = () => import('../views/Order/OrderBack/OrderBack.vue')
const OrderList = () => import('../views/Order/OrderList/OrderList.vue')
const AddGoods = ()=> import('../views/Goods/GoodAddPage.vue')
const routes = [{
    path: '',
    component: Layout,
    children: [{
        path: '',
        name: "HomePage",
        component: HomePage
      },
      {
        path: '/goods',
        name: "GoodsPage",
        component: GoodsPage
      },
      {
        path: '/advert',
        name: "AdvertPage",
        component: AdvertPage
      },
      {
        path: '/order',
        //重定向路由
        component: OrderPage,
        redirect:'/order/orderlist',
        children: [{
            path: 'orderlist',
            name: "OrderList",
            component: OrderList
          },
          {
            path: 'order-back',
            name: "OrderBack",
            component: OrderBack
          }
        ]
      },
      {
        path: '/params',
        name: "ParamsPage",
        component: ParamsPage
      },
      {
        path:'/addGoods',
        component: AddGoods
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router