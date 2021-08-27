import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChatModalComponent } from './delete-chat-modal.component';

describe('DeleteChatModalComponent', () => {
  let component: DeleteChatModalComponent;
  let fixture: ComponentFixture<DeleteChatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
