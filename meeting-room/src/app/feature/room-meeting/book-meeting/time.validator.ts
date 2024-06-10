import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmTimeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let date1: any = new Date(`2000-01-01T${control.value.start_time}Z`);
  let date2: any = new Date(`2000-01-01T${control.value.end_time}Z`);
  if (date2 < date1) {
    date2.setDate(date2.getDate() + 1);
  }
  let diff: any = date2 - date1;

  let day = new Date(control.value.meeting_data);
  let dayName = day.toString().split(' ')[0];

  return parseInt(control.value.start_time?.split(':')[0]) >= 9 &&
    parseInt(control.value.end_time?.split(':')[0]) <= 18 &&
    Math.floor(diff / 60000) >= 30 &&
    dayName != 'Sat' &&
    dayName != 'Sun'
    ? null
    : { TimeNoMatch: true };
};
