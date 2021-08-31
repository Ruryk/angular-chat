import { EButtonTypes } from '../../../../shared/custom-ui/button/button.enums';
import { EInputTypes } from '../../../../shared/custom-ui/input/input.enums';

export const CSignUpConfigList = {
  inputs: {
    email: {
      type: EInputTypes.Email,
      placeholder: 'E-mail',
    },
    password: {
      type: EInputTypes.Password,
      placeholder: 'Password',
    },
    firstName: {
      type: EInputTypes.Text,
      placeholder: 'First Name',
    },
    lastName: {
      type: EInputTypes.Text,
      placeholder: 'Last Name',
    },
  },
  buttons: {
    signUp: {
      type: EButtonTypes.Medium,
      text: 'Sign Up',
    },
  },
};
