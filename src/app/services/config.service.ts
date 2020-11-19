import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl =
    '/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.configUrl);
  }
}
