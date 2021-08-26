import { Component, Input } from '@angular/core';

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

  openFileDialog(type: string): void {
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    switch (type) {
      case EButtonTypes.Video:
        inputFile.accept = 'video/*';
        break;
      case EButtonTypes.Image:
        inputFile.accept = 'image/*';
        break;
      default:
        inputFile.accept = '.pdf, .txt, .doc, .docx, .xls, .zip, .rar';
        break;
    }
    inputFile.click();
    this.addFilePanelActive = !this.addFilePanelActive;
  }
}
