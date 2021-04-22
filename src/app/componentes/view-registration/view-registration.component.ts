import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/servicios/bike.service';


@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public dataBike :any ;
  constructor(private bikeService: BikeService , private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getOneBike(this.route.snapshot.params.id);
}

getOneBike(id: number){
  this.bikeService.getBike(id).subscribe(
    data => {
      this.dataBike = data;
    },
  )
}

}
