import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../components/Student'
import Attendence from '../components/Attendence'
import Purchase from '../components/Purchase'
import StudentInformationRead from '../components/StudentInformationRead'
import StudentInformationEdit from '../components/StudentInformationEdit'



Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      { path : '/student', component : Student,
        children : [
          {path : 'read', component : StudentInformationRead},
          {path : 'edit', component : StudentInformationEdit}
        ]
      },
      { path : '/attendence', component : Attendence},
      { path : '/purchase', component : Purchase  }
      
    ]
  })

  export default router