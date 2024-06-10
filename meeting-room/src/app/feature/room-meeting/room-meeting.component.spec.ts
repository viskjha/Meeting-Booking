import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMeetingComponent } from './room-meeting.component';

describe('RoomMeetingComponent', () => {
  let component: RoomMeetingComponent;
  let fixture: ComponentFixture<RoomMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomMeetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
