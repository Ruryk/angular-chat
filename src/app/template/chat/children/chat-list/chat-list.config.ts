import { EButtonTypes } from '../../../../shared/custom-ui/button/button.enums';
import { EInputTypes } from '../../../../shared/custom-ui/input/input.enums';
import { ESelectTypes } from '../../../../shared/custom-ui/select/select.enums';

export const CChatListConfigList = {
  buttons: {
    create: {
      type: EButtonTypes.Big,
      text: 'Create new Chat',
    },
  },
  inputs: {
    search: {
      type: EInputTypes.Search,
      placeholder: 'Search',
    },
  },
  selects: {
    filter: {
      type: ESelectTypes.Filter,
    },
  },
};
