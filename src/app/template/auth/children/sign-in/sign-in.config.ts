import { EButtonTypes } from '../../../../shared/custom-ui/button/button.enums';
import { EInputTypes } from '../../../../shared/custom-ui/input/input.enums';

export const CSignInConfigList = {
  inputs: {
    email: {
      type: EInputTypes.Email,
      placeholder: 'E-mail',
    },
    password: {
      type: EInputTypes.Password,
      placeholder: 'Password',
    },
  },
  buttons: {
    signIn: {
      type: EButtonTypes.Medium,
      text: 'Sign In',
    },
  },
};
