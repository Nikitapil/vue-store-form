import { createApp } from 'vue';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { render } from '@testing-library/vue';
import ProductsSidebar from '../components/ProductsSidebar.vue';

describe('products sidebar tests', () => {
  const app = createApp({});

  beforeEach(() => {
    const pinia = createTestingPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });
  test('should render products sidebar with products from cart store', () => {
    const { getByText } = render(ProductsSidebar);
    getByText('Order Summary');
    getByText('The Chelsea Boot');
    getByText('Reverse Denim + Brown leather');
    getByText('Reverse Denim + Brown leather');
    getByText('$48');
    getByText('$360.18');
  });
});
