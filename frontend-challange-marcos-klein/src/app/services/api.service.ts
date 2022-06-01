import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = 'YjcxNWY2MzYtNzc3NC00MGJjLWIwN2QtMmM5YTJhZjNjMmQ2';
  constructor(
    private http: HttpClient,
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      console.log(error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
  private extractData(res: Response) {
    return res;
  }

  getCountries(): Observable<any> {

    const url = "https://api.m3o.com/v1/holidays/Countries";
    const data = {};
    const httpOptionsLogin = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token })
    };

    return this.http.post(url, data, httpOptionsLogin).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getHolidays(code: string, year: string): Observable<any> {
    const url = "https://api.m3o.com/v1/holidays/List";
    const data = {
      country_code: code,
      year
    };
    const httpOptionsLogin = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token })
    };

    return this.http.post(url, data, httpOptionsLogin).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}

export interface ICountries {
  countries: Country[];
}

export interface Country {
  code: string;
  name: string;
}

// Generated by https://quicktype.io

export interface IHolidays {
  holidays: Holiday[];
}

export interface Holiday {
  date:         string;
  name:         string;
  local_name:   string;
  country_code: string;
  regions:      string[];
  types:        string[];
}
