import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.page.html',
  styleUrls: ['./select-city.page.scss'],
})
export class SelectCityPage implements OnInit {
  

  constructor(public router: Router) { }

  ngOnInit() { 
  }
  Washington()
  {
    this.router.navigate(['newyork',{}]);
  }
  Tucson()
  {
    this.router.navigate(['tucson',{}]);
  }
  LosAngeles()
  {
    this.router.navigate(['los-angeles',{}]);
  }
  Houston()
  {
    this.router.navigate(['houston',{}]);
  }
  Denver()
  {
    this.router.navigate(['denver',{}]);
  }
  Miami()
  {
    this.router.navigate(['miami',{}]);
  }
  Atlanta()
  {
    this.router.navigate(['atlanta',{}]);
  }
  Colombus()
  {
    this.router.navigate(['colombus',{}]);
  }
  Rayleigh()
  {
    this.router.navigate(['rayleigh',{}]);
  }
  Portland()
  {
    this.router.navigate(['portland',{}]);
  }
  Boston()
  {
    this.router.navigate(['boston',{}]);
  }
  Louisville()
  {
    this.router.navigate(['louisville',{}]);
  }

}