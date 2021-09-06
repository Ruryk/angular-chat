import { TestBed } from '@angular/core/testing';

import { ChatRoomDataService } from './chat-room-data.service';

describe('ChatRoomDataService', () => {
  let service: ChatRoomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatRoomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
