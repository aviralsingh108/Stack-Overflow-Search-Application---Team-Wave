import { ApiData } from './../models/array';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl =
    'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<ApiData[]> {
    return this.http.get<ApiData[]>(this.configUrl);
  }


}
