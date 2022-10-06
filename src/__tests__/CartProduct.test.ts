import { render } from '@testing-library/vue';
import CardProduct from '../components/CartProduct.vue';
import { createCartProducts } from '@/mock/cartMock';
describe('cartProduct tests', () => {
  test('should render cardProduct with right props values', () => {
    const products = createCartProducts();
    const { getByText } = render(CardProduct, {
      props: { product: products[0] }
    });
    getByText('The Chelsea Boot');
    getByText('Black');
    getByText('Quantity: 1');
  });
});
