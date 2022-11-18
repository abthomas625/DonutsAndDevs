import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Donuts } from '../donuts';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  
  donutId : number = -1;
  // private routeSub : Subscription;
  // private route : ActivatedRoute, 

  constructor(private donutApi : DonutsService) {
    // this.routeSub = this.route.queryParams.subscribe(params => {
    //     this.donutId = params['id']
    //   });
  }
  don : Donuts = {} as Donuts;

  ngOnInit(): void {
    this.donutApi.GetDonutDetails(this.donutId).subscribe();
  }

}
