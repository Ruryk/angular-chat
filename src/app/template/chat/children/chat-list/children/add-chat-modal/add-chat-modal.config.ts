import { EInputTypes } from '../../../../../../shared/custom-ui/input/input.enums';
import { EButtonTypes } from '../../../../../../shared/custom-ui/button/button.enums';

export const CAddChatModalConfigList = {
  inputs: {
    search: {
      type: EInputTypes.UserSearch,
      placeholder: 'User name',
    },
  },
  buttons: {
    cancel: {
      type: EButtonTypes.MediumFail,
      text: 'Cancel',
    },
    create: {
      type: EButtonTypes.MediumSuccess,
      text: 'Create',
    },
    close: {
      type: EButtonTypes.Close,
      text: '',
    },
  },
};
