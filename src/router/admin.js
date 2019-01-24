//  router for admin
import MainLayout from '@/components/layouts/AdminLayout'
import AdminLoginView from '@/views/admin/AdminLoginView'

const adminRouter = [
  {
    path: '/admin',
    name: 'admin',
    component: MainLayout
  },
  {
    path: '/admin/login',
    name: 'login',
    component: AdminLoginView
  }
]

export default adminRouter
