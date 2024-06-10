import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RoomMeetingComponent } from './room-meeting/room-meeting.component';
import { BookMeetingComponent } from './room-meeting/book-meeting/book-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from '../shared/layout/top-nav/top-nav.component';
import { MeetingDetailsViewComponent } from './room-meeting/meeting-details-view/meeting-details-view.component';

@NgModule({
  declarations: [RoomMeetingComponent, BookMeetingComponent, TopNavComponent, MeetingDetailsViewComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeatureModule {}
