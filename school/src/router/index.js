import SchoolData from '@/components/SchoolData.vue'
import MainScreen from '@/views/MainScreen.vue'
import SchoolCharts from '@/views/SchoolCharts.vue'
import SecondChart from '@/views/SecondChart.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainscreen',
      component: MainScreen,
    },
    {
      path: '/school/:feeder_school_name',
      name: 'schooldata',
      component: SchoolData,
    },
    {
      path: '/barchart',
      name: 'barchart',
      component: SchoolCharts
    },
      {
      path: '/piechart',
      name: 'piechart',
      component: SecondChart
    },
  ],
})

export default router
