import { Component, DestroyRef, inject } from '@angular/core';
import { RoomMeetingService } from './room-meeting.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccountService } from '../../account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-meeting',
  templateUrl: './room-meeting.component.html',
  styleUrl: './room-meeting.component.css',
})
export class RoomMeetingComponent {
  destroyRef = inject(DestroyRef);
  meeting_data!: any;
  filtered_meeting_data!: any;

  constructor(
    private roomMeetingService: RoomMeetingService,
    private accountService: AccountService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getMeetingData();
  }

  getMeetingRoomList() {
    return this.roomMeetingService.meeting_room;
  }

  onChangeMeetingRoom(event: any) {
    this.filtered_meeting_data = this.meeting_data.filter(
      (data: any) => data.meeting_room == event.target.value
    );
  }

  getMeetingData() {
    this.roomMeetingService.room_meeting
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.meeting_data = data;
      });
  }
}
