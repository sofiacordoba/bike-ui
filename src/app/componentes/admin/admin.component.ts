import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../servicios/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes:any; //variable que contiene a la lista de bikes
  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.getAllBikes()  // traigo todos los registros del back
  }

  getAllBikes(){
    //llamamos al servicio de bikes que nos trae todo el listado de api rest
    this.bikeService.getBikes().subscribe(    //me suscribo a el
      data => {this.bikes = data},
      err => { console.log(err) },
      () => console.log('Se cargaron las bikes :) '),
    );
  }
}
