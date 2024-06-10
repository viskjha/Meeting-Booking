import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomMeetingComponent } from './room-meeting/room-meeting.component';
import { BookMeetingComponent } from './room-meeting/book-meeting/book-meeting.component';

const routes: Routes = [
  {
    path: '',
    component: RoomMeetingComponent,
    children: [{ path: ':id', component: BookMeetingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
