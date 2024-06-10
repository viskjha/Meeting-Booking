import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmTimeValidator } from './time.validator';
import { RoomMeetingService } from '../room-meeting.service';

@Component({
  selector: 'app-book-meeting',
  templateUrl: './book-meeting.component.html',
  styleUrl: './book-meeting.component.css',
})
export class BookMeetingComponent {
  meeting_form!: FormGroup;
  edit_mode: boolean = false;
  id!: string;
  show_seached_room: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomMeetingService: RoomMeetingService
  ) {}

  ngOnInit() {
    this.getParamModeDetails();
  }

  getParamModeDetails() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.edit_mode = params['id'] !== 'new';
      this.buildMeetingConfigForm();
    });
  }

  buildMeetingConfigForm() {
    this.meeting_form = new FormGroup(
      {
        username: new FormControl(null, Validators.required),
        meeting_data: new FormControl(null, Validators.required),
        start_time: new FormControl(null, [Validators.required]),
        end_time: new FormControl(null, [Validators.required]),
        meeting_room: new FormControl(null, Validators.required),
        agenda: new FormControl(null, Validators.required),
      },
      { validators: [confirmTimeValidator] }
    );
  }

  onClickSearchRoom() {
    this.roomMeetingService.meeting_room.length > 0
      ? (this.show_seached_room = true)
      : (this.show_seached_room = false);
  }

  getMeetingRoomList() {
    return this.roomMeetingService.meeting_room;
  }

  onClickSave() {
    this.roomMeetingService.addMeetingDetails(this.meeting_form.value);
    this.onClickCancel();
  }

  onClickCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
