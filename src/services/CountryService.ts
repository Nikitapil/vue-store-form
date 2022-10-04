import axios from 'axios';
import type { TCountry } from '@/types/countries';

export class CountryService {
  static async getCountries() {
    const response = await axios.get<TCountry[]>(
      'https://restcountries.com/v3.1/all'
    );
    return response.data.map((item) => item.name.common);
  }
}
