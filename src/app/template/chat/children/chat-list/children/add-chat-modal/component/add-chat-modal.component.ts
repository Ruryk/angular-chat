import { Component, OnInit } from '@angular/core';

import { CAddChatModalConfigList } from '../add-chat-modal.config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-chat-modal',
  templateUrl: './add-chat-modal.component.html',
  styleUrls: ['./add-chat-modal.component.scss'],
})
export class AddChatModalComponent implements OnInit {
  public addChatModalConfig = CAddChatModalConfigList;
  public readonly addChatForm: FormGroup = new FormGroup({
    userSearch: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  submitForm(event: Event): void {
    event.preventDefault();
    console.log(this.addChatForm.value);
  }
}
