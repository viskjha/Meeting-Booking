import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error) {
      errorMessage = JSON.stringify(error.error, null, 4);
    } else if (error.error?.status || error.error?.message) {
      errorMessage = `Error Code: ${error.error.status} "\n Message: ${error.error.message}`;
    } else {
      errorMessage = 'Internal Server Error';
    }
    console.error(error);
    return throwError(errorMessage);
  }

  get(endpoint: string, options?: any): Observable<any> {
    return this.http
      .get(`${this.apiURL}${endpoint}`, options)
      .pipe(catchError(this.handleError));
  }

  post(endpoint: string, body: any, options?: any): Observable<any> {
    return this.http
      .post(`${this.apiURL}${endpoint}`, body, options)
      .pipe(catchError(this.handleError));
  }

  put(endpoint: string, body: any, options?: any): Observable<any> {
    return this.http
      .put(`${this.apiURL}${endpoint}`, body, options)
      .pipe(catchError(this.handleError));
  }

  delete(endpoint: string, options?: any): Observable<any> {
    return this.http
      .delete(`${this.apiURL}${endpoint}`, options)
      .pipe(catchError(this.handleError));
  }
}
