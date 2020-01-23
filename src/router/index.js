import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/layout/Navbar'
import Footer from '../views/layout/Footer.vue'
import Sidebar from '../views/layout/Sidebar.vue'
import DataKantin from '../views/DataKantin.vue'
import Beranda from '../views/Beranda.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, header: Navbar, footer: Footer, sidebar: Sidebar},

  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default: DataKantin, header: Navbar, footer: Footer, sidebar: Sidebar},

  },
  {
    path: '/datamakanan',
    name: 'datamakanan',
    components: {default: DataMakanan, header: Navbar, footer: Footer, sidebar: Sidebar},

  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar, footer: Footer, sidebar: Sidebar},

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
