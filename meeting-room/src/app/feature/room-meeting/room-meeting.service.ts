import { DestroyRef, Injectable, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { BehaviorSubject, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Meeting {
  id: number;
  username: string;
  meeting_data: string;
  start_time: string;
  end_time: string;
  meeting_room: string;
  agenda: string;
}

@Injectable({
  providedIn: 'root',
})
export class RoomMeetingService {
  room_meeting: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  destroyRef = inject(DestroyRef);
  meeting_room: Array<string> = [
    'Meeting Room #1',
    'Meeting Room #2',
    'Meeting Room #3',
    'Meeting Room #4',
    'Meeting Room #5',
    'Meeting Room #6',
    'Meeting Room #7',
    'Meeting Room #8',
    'Meeting Room #9',
    'Meeting Room #10',
  ];

  constructor(private crudService: CrudService) {
    this.fetchMeetingDetails();
  }

  fetchMeetingDetails() {
    let endpoint = `meeting-room`;
    this.crudService
      .get(endpoint)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response) => {
          this.room_meeting.next(response);
        },
        (error) => {}
      );
  }

  addMeetingDetails(meeting: Meeting) {
    let endpoint = `meeting-room`;
    let current_item = this.room_meeting.getValue();
    this.crudService
      .post(endpoint, meeting)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response) => {
          current_item.push(response);
          this.room_meeting.next(current_item);
        },
        (error) => {}
      );
  }

  deleteMeetingDetails(id: number) {
    let endpoint = `meeting-room/${id}`;
    let current_item = this.room_meeting.getValue();
    this.crudService
      .delete(endpoint)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response) => {
          let itemWithoutDelete = current_item.filter(
            (data: Meeting) => data.id !== id
          );
          console.log(current_item);
          this.room_meeting.next(itemWithoutDelete);
        },
        (error) => {}
      );
  }
}
