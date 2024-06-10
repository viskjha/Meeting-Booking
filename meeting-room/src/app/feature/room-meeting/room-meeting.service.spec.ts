import { TestBed } from '@angular/core/testing';

import { RoomMeetingService } from './room-meeting.service';

describe('RoomMeetingService', () => {
  let service: RoomMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
