import { Component, OnInit } from '@angular/core';
import {LeadersService} from '../leader/leaders.service';
import { Leaders } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
   leaders : Leaders[];
   selectedLeaders : Leaders;

  constructor(private LeadersService: LeadersService) { }

  ngOnInit() {
    this.leaders = this.LeadersService.getLeaders();
  }

}
