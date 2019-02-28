//  router for admin
import MainLayout from '@/components/layouts/AdminLayout'
import Login from '@/views/admin/Login'

const adminRouter = [
  {
    path: '/admin',
    name: 'admin',
    component: MainLayout
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  }
]

export default adminRouter
