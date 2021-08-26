import { Component, HostListener, Input } from '@angular/core';

import { IButtonsParameters } from '../button.interfaces';
import { EButtonTypes } from '../button.enums';
import { EmojiService } from '../../../../services/emoji/emoji.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public EButtonTypes = EButtonTypes;
  public componentParameters: IButtonsParameters = { text: '', type: '' };
  public emojiPanelState$ = this.emojiService.emojiPanelState$;
  public addFilePanelActive = false;

  @Input() set buttonParameters(params: IButtonsParameters) {
    this.componentParameters = params;
  }

  get buttonParameters(): IButtonsParameters {
    return this.componentParameters;
  }

  constructor(public emojiService: EmojiService) {}

  toggleEmojiPanelState(): void {
    const state = !this.emojiService.emojiPanelState;
    this.emojiService.emojiPanelState$.next(state);
  }

  addEmoji(event: any): void {
    this.emojiService.emojiValue$.next(event.emoji.native);
  }
}
