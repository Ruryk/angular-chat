import { EButtonTypes } from '../../../../shared/custom-ui/button/button.enums';
import { EInputTypes } from '../../../../shared/custom-ui/input/input.enums';

export const CChatRoomConfigList = {
  buttons: {
    attach: {
      type: EButtonTypes.Attach,
    },
    more: {
      type: EButtonTypes.More,
    },
    send: {
      type: EButtonTypes.Send,
    },
    add: {
      type: EButtonTypes.Add,
    },
    smile: {
      type: EButtonTypes.Smile,
    },
    image: {
      type: EButtonTypes.Image,
    },
    video: {
      type: EButtonTypes.Video,
    },
    file: {
      type: EButtonTypes.File,
    },
  },
  inputs: {
    message: {
      type: EInputTypes.Message,
      placeholder: 'Type a message here',
    },
  },
};
