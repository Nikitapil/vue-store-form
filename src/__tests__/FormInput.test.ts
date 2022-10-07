import { fireEvent, render } from '@testing-library/vue';
import FormInput from '../components/FormInput.vue';
import Maska from 'maska';
import { setValidation } from '@/plugins/validation';
describe('form input tests', () => {
  test('should render input with valid props', () => {
    const value = '';
    const { getByPlaceholderText } = render(FormInput, {
      props: {
        name: 'test-input',
        modelValue: value,
        placeholder: 'test'
      },
      global: {
        plugins: [Maska]
      }
    });
    getByPlaceholderText('test');
  });

  test('should  emit action', async () => {
    const value = '';
    const { getByPlaceholderText, emitted } = render(FormInput, {
      props: {
        name: 'test',
        modelValue: value,
        placeholder: 'test',
        rules: 'required',
      },
      global: {
        plugins: [Maska, setValidation]
      }
    });
    const input = getByPlaceholderText('test');
    await fireEvent.update(input, 'Hello');
    expect(emitted()['update:modelValue'][0]).toEqual(['Hello']);
  });
});
