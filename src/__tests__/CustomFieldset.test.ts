import { render } from '@testing-library/vue';
import CustomFieldset from '../components/CustomFieldset.vue';

describe('custom fieldset tests', () => {
  test('should render custom fieldset with right prop', () => {
    const { getByText } = render(CustomFieldset, {
      props: {
        legend: 'Hello'
      }
    });
    getByText('Hello');
  });
});
