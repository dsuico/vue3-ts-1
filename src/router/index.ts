import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardPage from "@/pages/DashboardPage.vue";
import UsersPage from "@/pages/users/UsersPage.vue";
import UserCreate from "@/pages/users/UserCreate.vue";
import UserEdit from "@/pages/users/UserEdit.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import WrapperPage from "@/pages/WrapperPage.vue";
import RolesPage from "@/pages/roles/RolesPage.vue";
import RoleCreate from "@/pages/roles/RoleCreate.vue";
import RoleEdit from "@/pages/roles/RoleEdit.vue";
import ProductsPage from "@/pages/products/ProductsPage.vue";
import ProductCreate from "@/pages/products/ProductCreate.vue";
import ProductEdit from "@/pages/products/ProductEdit.vue";
import OrdersPage from "@/pages/orders/OrdersPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: RegisterPage},
  {path: '/login', component: LoginPage},
  {
    path: '',
    component: WrapperPage,
    children: [
      {path: '', component: DashboardPage},
      {path: '/profile', component: ProfilePage},
      {path: '/users', component: UsersPage},
      {path: '/users/create', component: UserCreate},
      {path: '/users/:id/edit', component: UserEdit},
      {path: '/roles', component: RolesPage},
      {path: '/roles/create', component: RoleCreate},
      {path: '/roles/:id/edit', component: RoleEdit},
      {path: '/products', component: ProductsPage},
      {path: '/products/create', component: ProductCreate},
      {path: '/products/:id/edit', component: ProductEdit},
      {path: '/orders', component: OrdersPage}
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
