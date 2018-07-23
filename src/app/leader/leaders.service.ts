import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leader';
import { LEADERS} from '../shared/leaders';

@Injectable()
export class LeadersService {

  constructor() { }

  getLeaders(): Leaders[] {
     return LEADERS;
  }
}
