import { Component, DestroyRef, Input, inject, input } from '@angular/core';
import { RoomMeetingService } from '../room-meeting.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-meeting-details-view',
  templateUrl: './meeting-details-view.component.html',
  styleUrl: './meeting-details-view.component.css',
})
export class MeetingDetailsViewComponent {
  @Input() meeting_details: any;
  destroyRef = inject(DestroyRef);

  constructor(private roomMeetingService: RoomMeetingService) {}

  onClickDelete(id: number) {
    this.roomMeetingService.deleteMeetingDetails(id);
  }
}
