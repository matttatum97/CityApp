import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { Router } from '@angular/router';
import { City } from '../city/city.model';
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  city:City = {}

  constructor(
    private router: Router,
    private cityService: CityService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = params["id"];
      this.cityService.getCity(myid).subscribe (payload => {
        this.city = payload
        console.log(this.city)
      })
    })
    
  }

  updateCity() {
    this.cityService.updateCity(this.city).subscribe(p => {
      if (p) {
        this.router.navigateByUrl("")
      }
    })
  }

  deleteCity() {
    console.log(typeof this.city.id)
    this.cityService.deleteCity(this.city).subscribe(p => {
      this.router.navigateByUrl("")
    })
  }

}
