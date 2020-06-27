import { Component, OnInit } from '@angular/core';
import {WEATHERS} from '../data/weatherMOCK';
import {WEATHER} from '../data/weather';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  weathers: WEATHER[] = WEATHERS;
  selectedCity: WEATHER;
  constructor() { }

  ngOnInit(): void {
  }

  showTemp(city: string) {
    this.selectedCity  = this.weathers.find(name => name.city === city);
  }

  startTemp(){
    console.log('subscribing in startTemp');
    this.selectedCity  = this.weathers.find(name => name.city === city);
  }

}
