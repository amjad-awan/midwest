import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dash from '../views/Dash.vue'
import WorkOrder from '../views/WorkOrder.vue'
import UserMantainance from '../views/UserMantainance.vue'
import UserLevel from '../components/UserLevel.vue'
import UserType from '../components/UserType.vue'
import CustomerMantainance from '../views/CustomerMantainance.vue'
import VehicleMantainance from '../views/VehicleMantainance.vue'
import ContainerMantainance from '../views/ContainerMantainance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dash,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/workorder',
        name: 'Workorder',
        component: WorkOrder
      },
      {
        path: '/user',
        name: 'UserMantainance',
        component: UserMantainance
      },
      {
        path: '/userlevel',
        name: 'UserLevel',
        component: UserLevel
      },
      {
        path: '/usertype',
        name: 'UserType',
        component: UserType
      },
      {
        path: '/customer',
        name: 'CustomerMantainance',
        component: CustomerMantainance
      },
      {
        path: '/vehicle',
        name: 'VehicleMantainance',
        component: VehicleMantainance
      },
      {
        path: '/container',
        name: 'ContainerMantainance',
        component: ContainerMantainance
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
