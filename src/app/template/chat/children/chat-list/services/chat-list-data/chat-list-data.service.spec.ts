import { TestBed } from '@angular/core/testing';

import { ChatListDataService } from './chat-list-data.service';

describe('ChatListDataService', () => {
  let service: ChatListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
