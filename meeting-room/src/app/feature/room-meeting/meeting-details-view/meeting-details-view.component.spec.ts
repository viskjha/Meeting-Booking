import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetailsViewComponent } from './meeting-details-view.component';

describe('MeetingDetailsViewComponent', () => {
  let component: MeetingDetailsViewComponent;
  let fixture: ComponentFixture<MeetingDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
