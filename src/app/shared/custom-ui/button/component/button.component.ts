import { Component, Input } from '@angular/core';

import { IButtonsParameters } from '../button.interfaces';
import { EButtonTypes } from '../button.enums';
import { EmojiService } from '../../../../services/emoji/emoji.service';
import { FilesService } from '../../../../services/files/files.service';

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

  constructor(
    public emojiService: EmojiService,
    public filesService: FilesService
  ) {}

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
    inputFile.onchange = (event: any) => {
      const file = event.target.files[0];
      this.filesService.file$.next({ file, type: file.type });
      this.addFilePanelActive = !this.addFilePanelActive;
    };
    this.addFilePanelActive = !this.addFilePanelActive;
  }
}
