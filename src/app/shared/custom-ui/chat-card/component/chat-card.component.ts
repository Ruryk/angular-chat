import { Component, Input } from '@angular/core';

import { EChatCardTypes } from '../chat-card.enums';
import { IChatCardParameters } from '../chat-card.interfaces';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss'],
})
export class ChatCardComponent {
  public componentParameters: IChatCardParameters = {
    id: '',
    name: '',
    photo: '',
    message: '',
    noChecked: 0,
    time: 0,
    online: false,
    status: 'string',
    isRoom: false,
  };

  @Input() activeChatId: string | null = null;

  @Input() set chatCardParameters(params: IChatCardParameters) {
    this.componentParameters = params;
  }

  get chatCardParameters(): IChatCardParameters {
    return this.componentParameters;
  }
}
