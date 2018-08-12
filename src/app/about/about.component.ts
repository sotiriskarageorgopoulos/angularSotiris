import { Component, OnInit , Inject } from '@angular/core';
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

   constructor(private leaderService: LeadersService,
    @Inject('BaseURL') public BaseURL) { }
    ngOnInit() {
      this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
   }

}
