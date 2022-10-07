import { createApp } from 'vue';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { fireEvent, render } from '@testing-library/vue';
import OrderPage from '../views/OrderPage.vue';
import Maska from 'maska';
import { setValidation } from '@/plugins/validation';
import { flushPromises } from '@vue/test-utils';
import router from '../mock/mockingRouter';

describe('Pages tests', () => {
  const app = createApp({});

  beforeEach(() => {
    const pinia = createTestingPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test('should render and mount Shipping info page as first', async () => {
    const { getByText } = render(OrderPage, {
      global: {
        plugins: [Maska, setValidation, router]
      }
    });
    await flushPromises();
    getByText('Shipping Info');
  });

  test('breadcrumbs should be disabled', async () => {
    const { getByText, queryByText } = render(OrderPage, {
      global: {
        plugins: [Maska, setValidation, router]
      }
    });
    const billingLink = getByText('Billing');
    const paymentLink = getByText('Payment');
    await fireEvent.click(billingLink);
    await flushPromises();
    getByText('Shipping Info');
    expect(queryByText('Billing Information')).toBe(null);
    await fireEvent.click(paymentLink);
    getByText('Shipping Info');
    expect(queryByText('This is a secure 128-bit SSL encrypted payment')).toBe(
      null
    );
  });
});
