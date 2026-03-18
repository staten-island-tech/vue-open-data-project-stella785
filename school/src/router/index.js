import SchoolCard from '@/components/SchoolCard.vue'
import SchoolData from '@/components/SchoolData.vue'
import MainScreen from '@/views/MainScreen.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mainscreen',
      name: 'mainscreen',
      component: MainScreen,
    },
    {
      path: '/school/:feeder_school_name',
      name: 'schooldata',
      component: SchoolData,
    },
    {
      path: '/schoolcard',
      name: 'schoolcard',
      component: SchoolCard,
    }
  ],
})

export default router
