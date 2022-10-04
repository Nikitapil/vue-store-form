import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/OrderPage.vue'),
      children: [
        {
          path: '/billing',
          name: 'billing-info',
          component: () => import('../views/OrderPage/BillingInfo.vue')
        },
        {
          path: '/payment',
          name: 'payment-info',
          component: () => import('../views/OrderPage/PaymentPage.vue')
        },
        {
          path: '/shipping',
          name: 'shipping-info',
          component: () => import('../views/OrderPage/ShippingInfo.vue')
        },
        {
          path: '/ordered',
          name: 'order-success',
          component: () => import('../views/OrderPage/OrderSccess.vue')
        }
      ]
    }
  ]
});

export default router;
