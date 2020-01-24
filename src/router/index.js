import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../components/Student'
import Attendence from '../components/Attendence'
import Purchase from '../components/Purchase'



Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/student', component : Student},
      { path : '/attendence', component : Attendence},
      { path : '/purchase', component : Purchase  }
      
    ]
  })

  export default router