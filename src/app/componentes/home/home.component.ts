import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../servicios/bike.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'bike model 1 ',
    'bike model 12 ',
    'bike model carbon 13 ',
    'bike model fibe 14 ',
    'bike model race 15 ',
  ];

  bikeForm: FormGroup;
  validMessage: string = "";
  constructor(private bikeService: BikeService) {
    this.bikeForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required),
      contact: new FormControl('',Validators.required)
    });
}


  ngOnInit(): void {
  }

  submitRegistration() {
    if (this.bikeForm.valid) {
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          this.validMessage = 'Su Formulario Se envio con exito'
        }
      )
    } else {
      this.validMessage = 'Campos Errados , intenta de nuevo !'
    }

  }

}
