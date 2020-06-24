import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
@Component({
  selector: 'app-los-angeles',
  templateUrl: './los-angeles.page.html',
  styleUrls: ['./los-angeles.page.scss'],
})
export class LosAngelesPage implements OnInit {
  private forecast;
  constructor(public restapi : RestapiService) { }

  ngOnInit() {
    this. restapi.losangelesweather().subscribe(  (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt =  JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);

     
    });

  }

}
