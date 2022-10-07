import CountryInput from '../components/CountryInput.vue';
import axios from 'axios';
import { flushPromises, mount } from '@vue/test-utils';
describe('CountryInput tests', function () {
  jest.mock('axios');
  test('should call api after mounting', () => {
    // @ts-ignore
    axios.get = jest.fn();
    (axios.get as any).mockReturnValue({ data: [] });
    // @ts-ignore
    const wrapper = mount(CountryInput, {
      global: {
        stubs: ['form-input']
      }
    });
    expect(axios.get).toHaveBeenCalled();
  });

  test('should update internal value', async () => {
    axios.get = jest.fn();
    (axios.get as any).mockReturnValue({ data: [{ name: { common: '1' } }] });
    // @ts-ignore
    const wrapper = mount(CountryInput, {
      global: {
        stubs: ['form-input']
      },
      props: {
        modelValue: '1'
      }
    });

    await flushPromises();

    expect(wrapper.html()).toContain('1');
  });
});
