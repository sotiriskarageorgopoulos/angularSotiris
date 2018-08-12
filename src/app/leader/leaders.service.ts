import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leader';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeadersService {

  constructor(private http: HttpClient) { }
  getLeaders(): Observable<Leaders[]> {
  return this.http.get<Leaders[]>(baseURL + 'leaders');
  }
  getLeader(id: number): Observable<Leaders> {
  return this.http.get<Leaders>(baseURL + 'leaders/' + id);
  }
}
