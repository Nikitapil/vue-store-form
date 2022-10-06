import CountryInput from '../components/CountryInput.vue';
import axios from 'axios';
import { mount } from '@vue/test-utils';
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
});
