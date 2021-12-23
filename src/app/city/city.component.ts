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
      })
    })
  }

  goToEdit() {
    this.router.navigateByUrl(`city/${this.city.id}/edit-city`)
  }

  goBack() {
    this.router.navigateByUrl("");
  }

}
