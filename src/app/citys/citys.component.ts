import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city/city.model';

@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {

  citys: City[] = [];

  newCity:City = {
    city: "",
    state: "",
    monthlyRent: 0,
    averageSal: 0,
    updatedYear: "" 
  }

  addCity: boolean = false;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCitys().subscribe(payload => {
      this.citys = payload;
      console.log(this.citys)
    })
  }

  showAddCity() {
    this.addCity = !this.addCity;
  }

  addNewCity() {
    this.cityService.addCity(this.newCity).subscribe(payload => {
      this.showAddCity()
      this.ngOnInit()
    })
  }

}
