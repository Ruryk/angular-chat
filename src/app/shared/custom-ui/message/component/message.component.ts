import { Component, Input, OnInit } from '@angular/core';

import { EMessageTypes } from '../message.enums';
import { IMessageParameters } from '../message.interfaces';
import { CMessageConfigList } from '../message.config';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  public EMessageTypes = EMessageTypes;
  public messageConfig = CMessageConfigList;
  public componentParameters: IMessageParameters = {
    text: '',
    type: '',
    date: 0,
  };

  @Input() set messageParameters(params: IMessageParameters) {
    this.componentParameters = params;
  }

  get messageParameters(): IMessageParameters {
    return this.componentParameters;
  }
}
