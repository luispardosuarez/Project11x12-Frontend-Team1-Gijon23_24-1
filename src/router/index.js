import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AdminBecadosView from '@/views/adminBecadosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //  {
    //     path: '/admin',
    //    name: 'admin',
    //   component: AdminBecadosView,
    // },
 {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
      
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/InscriptionsView.vue')
      
    },
    {
      path: '/inscriptionPaso2',
      name: 'inscriptionPaso2',
      component: () => import('../views/InscriptionsView2.vue')
      
    },
    {
      path: '/inscriptionPaso3',
      name: 'inscriptionPaso3',
      component: () => import('../views/InscriptionsView3.vue')
      
    },
    {
      path: '/inscriptionPaso4',
      name: 'inscriptionPaso4',
      component: () => import('../views/InscriptionsView4.vue')
      
    },
    {
      path: '/inscriptionPaso5',
      name: 'inscriptionPaso5',
      component: () => import('../views/InscriptionsView5.vue')
      
    },
    {
      path: '/inscriptionPaso6',
      name: 'inscriptionPaso6',
      component: () => import('../views/InscriptionsView6.vue')
      
    },
    {
      path: '/inscriptionPaso7',
      name: 'inscriptionPaso7',
      component: () => import('../views/InscriptionsView7.vue')
      
    },

    {
      path: '/user',
      name: 'UserDashboard',
      component: () => import('../views/UserDashboardView.vue')
      
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminDashboardView.vue')
      
    },

    {
      path: '/add',
      name: 'AddParticipant',
      component: () => import('../views/AddParticipantView.vue')
      
    },

    {
      path: '/edit',
      name: 'EditParticipant',
      component: () => import('../views/EditParticipantView.vue')
      
    },
    {
      path: '/camp',
      name: 'camp',
      component: () => import('../views/AdminDashboardCampView.vue')
      
    },
  ]
})

export default router
