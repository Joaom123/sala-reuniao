import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRoomComponent } from './client-room.component';

describe('ClientRoomComponent', () => {
  let component: ClientRoomComponent;
  let fixture: ComponentFixture<ClientRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
