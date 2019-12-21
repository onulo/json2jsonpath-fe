import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonpathService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  generateJsonPaths(json: string): Observable<Object> {
    return this.http.post<string>(environment.baseUrl + '/json2jsonPath', json, this.httpOptions).pipe();
  }
}
