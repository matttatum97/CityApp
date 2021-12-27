import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { City } from './city.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city:City = {}

  tempCityList:any[][] = [];

  constructor(
    private route:ActivatedRoute,
    private cityService: CityService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //Gets param from route. Check city.component.html to see where this is set up
      const myid = params['id'];
      console.log(myid)
      this.cityService.getCity(myid).subscribe(payload => {
        this.city = payload;
        console.log(this.city)
        for(const [key, value] of Object.entries(this.city)) {
          const localArray = [key, value, false];
          this.tempCityList.push(localArray)
        }

      })
    })
  }

  goToEdit() {
    this.router.navigateByUrl(`city/${this.city.id}/edit-city`)
  }

  goBack() {
    this.router.navigateByUrl("");
  }

  makeEditable(i: number) {
    this.tempCityList[i][2] = !this.tempCityList[i][2]
  }

  updateCity() {
    
  }

}
