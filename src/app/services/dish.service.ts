import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Dish } from '../shared/dish';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';



@Injectable()
export class DishService {
  constructor(private http: HttpClient) { }
  getDishes(): Observable<Dish[]> {
  return this.http.get<Dish[]>(baseURL + 'dishes');
  }
  getDish(id: number): Observable<Dish> {
  return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }
 }
