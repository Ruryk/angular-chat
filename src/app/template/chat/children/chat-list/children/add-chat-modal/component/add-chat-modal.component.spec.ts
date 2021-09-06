import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChatModalComponent } from './add-chat-modal.component';

describe('AddChatModalComponent', () => {
  let component: AddChatModalComponent;
  let fixture: ComponentFixture<AddChatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
