import { defineRule } from 'vee-validate';
import { numeric, email } from '@vee-validate/rules';
export const setValidation = () => {
  defineRule('required', (value, _, ctx) => {
    if (!value) {
      return `${ctx.field.toUpperCase()} is required`;
    }
    return !!value;
  });

  defineRule('minLength', (value: string, [limit]: number[], ctx) => {
    if (!value) {
      return true;
    }
    if (value.length < limit) {
      return `${ctx.field.toUpperCase()} has incorrect format`;
    }
    return true;
  });

  defineRule('fullName', (value: string) => {
    if (!value) {
      return true;
    }
    const splitted = value.split(' ');
    if (
      splitted.length !== 2 ||
      splitted[0].length < 1 ||
      splitted[1].length < 1
    ) {
      return 'Name is Incorrect';
    }
    return true;
  });

  defineRule('cardDate', (value: string) => {
    if (!value) {
      return true;
    }
    const splitted = value.split('/');
    const isMonthValid = +splitted[0] <= 12 && +splitted[0] > 0;
    if (
      splitted.length !== 2 ||
      !isMonthValid ||
      splitted[0].length < 2 ||
      splitted[1].length < 2
    ) {
      return 'Date is invalid format';
    }
    return true;
  });

  defineRule('numeric', numeric);
  defineRule('email', email);
};
