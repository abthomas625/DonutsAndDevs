import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donuts } from './donuts';
import { DonutsComponent } from './donuts/donuts.component';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http : HttpClient) {}

  GetAllDonuts() : Observable<Donuts>{
    let url : string = "https://grandcircusco.github.io/demo-apis/donuts.json"
    return this.http.get<Donuts>(url)
  }
  GetDonutDetails(id : number) : Observable<DonutsComponent>{
    let url : string = `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`;
    return this.http.get<DonutsComponent>(url);
  }
}
