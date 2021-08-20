import { Component, OnInit } from '@angular/core';
import { CChatListConfigList } from '../chat-list.config';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public readonly chatListConfig = CChatListConfigList;

  constructor() {}

  ngOnInit(): void {}
}
