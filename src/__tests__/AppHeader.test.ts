import { fireEvent, render } from '@testing-library/vue';
import AppHeader from '../components/AppHeader.vue';
import { createApp } from 'vue';
import { setActivePinia } from 'pinia';
import '@testing-library/jest-dom';
import { useCartStore } from '@/stores/cartStore';
import { createTestingPinia } from '@pinia/testing';
import { useShippingFormStore } from '@/stores/ShippingFormStore';
describe('app header test', () => {
  const app = createApp({});

  beforeEach(() => {
    const pinia = createTestingPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test('should render app header', () => {
    const { getByText, getByTestId } = render(AppHeader);
    getByText('Shopping app');
    getByText('Cart');
    const counter = getByTestId('cart-counter');
    expect(counter).toHaveTextContent('3');
  });

  test('should reseting stores', async () => {
    const cartStore = useCartStore();
    const shippingStore = useShippingFormStore();
    cartStore.$reset = jest.fn();
    shippingStore.$reset = jest.fn();
    const { getByText } = render(AppHeader);
    await fireEvent.click(getByText('Cart'));
    expect(cartStore.$reset).toHaveBeenCalled();
    expect(shippingStore.$reset).toHaveBeenCalled();
  });
});
