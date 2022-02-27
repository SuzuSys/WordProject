export default [
  {
    path: '/',
    redirect: { name: "Top" },
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn'),
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('@/views/Top'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard'),
    meta: { requireAuth: true },
  },
];