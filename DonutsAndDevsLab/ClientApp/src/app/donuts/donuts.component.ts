import { Component, OnInit } from '@angular/core';
import { Donuts } from '../donuts';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  
  constructor(private donutApi : DonutsService) {}
  donut : Donuts = {} as Donuts;
  
  ngOnInit(): void {
    this.donutApi.GetAllDonuts().subscribe((result: Donuts) => (this.donut = result));
  }

}
