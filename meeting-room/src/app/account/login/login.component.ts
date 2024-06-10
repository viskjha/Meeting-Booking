import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login_form!: FormGroup;
  error_massage!: string;
  destroyRef = inject(DestroyRef);

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.login_form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onClickLogin() {
    this.accountService
      .login(this.login_form.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: any) => {
          if (response != null) {
            this.router.navigate(['meeting']);
          } else if (response == null) {
            this.error_massage = 'Incorrect Password';
          }
        },
        (error: any) => {}
      );
  }
}
