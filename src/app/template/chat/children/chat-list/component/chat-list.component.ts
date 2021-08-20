import { Component, OnInit } from '@angular/core';
import { CChatListConfigList } from '../chat-list.config';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public readonly chatListConfig = CChatListConfigList;

  testCardList = [
    {
      type: 'no-active',
      data: {
        firstName: 'Luy',
        lastName: 'Robin',
        photo: 'luy',
        noChecked: 2,
        message:
          'Most of its text is made up from sections 1.10.32–3 of Cicero De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).',
        time: 1629471112000,
        online: true,
        status: '...writes',
      },
    },
    {
      type: 'no-active',
      data: {
        firstName: 'Jared',
        lastName: 'Sunn',
        photo: 'jared',
        noChecked: 1,
        message:
          'Most of its text is made up from sections 1.10.32–3 of Cicero De finibus bonorum et malorum.',
        time: 1629472112000,
        online: true,
        status: 'records voice message',
      },
    },
    {
      type: 'active',
      data: {
        firstName: 'Nika',
        lastName: 'Jerrardo',
        photo: 'nika',
        message:
          'Cicero famously orated against his political opponent Lucius Sergius Catilina.',
        noChecked: 0,
        time: 1629473112000,
        online: false,
        status: 'last online 5 hours ago',
      },
    },
    {
      type: 'no-active',
      data: {
        firstName: 'Jared',
        lastName: 'Sunn',
        photo: 'jared',
        noChecked: 1,
        message:
          'Most of its text is made up from sections 1.10.32–3 of Cicero De finibus bonorum et malorum.',
        time: 1629472112000,
        online: true,
        status: 'records voice message',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
