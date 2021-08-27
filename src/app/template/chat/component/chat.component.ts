import { Component, OnInit } from '@angular/core';
import { ChatDataService } from '../services/chat-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private chatDataService: ChatDataService) {}

  ngOnInit(): void {
    this.chatDataService.getChatListData();
  }
}
