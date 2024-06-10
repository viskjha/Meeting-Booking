import { DestroyRef, Injectable, inject } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  user: BehaviorSubject<User[]> = new BehaviorSubject<any>(null);
  destroyRef = inject(DestroyRef);

  constructor(private crudService: CrudService, private router: Router) {
    this.user.next([
      {
        username: '',
        password: 'Password123',
      },
    ]);
  }

  login(request_body: User) {
    let endpoint = `users`;
    return this.user.pipe(
      takeUntilDestroyed(this.destroyRef),
      map((user: any) => {
        if (request_body?.password === user[0]?.password) {
          delete user[0]['password'];
          user[0]['username'] = request_body['username'];
          localStorage.setItem('user', JSON.stringify(user[0]));
          return user[0];
        }
        return null;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
