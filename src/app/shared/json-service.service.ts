import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, observable, throwError, from } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { TokenError, TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
   private BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient,) { }

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
  loginPage (): Observable<any> {
    console.log();
    return this.http.get<any>(this.BASE_URL + 'UserData', this.httpOptions).pipe(
    retry(1),
     catchError(this.handleError)
  );
  }
}
