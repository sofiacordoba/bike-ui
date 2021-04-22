import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImgService } from 'src/app/servicios/img.service';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: any;


 constructor(private imgService: ImgService , private route: ActivatedRoute) { }

ngOnInit(): void {
console.log( this.route.snapshot.params['id']);
this.image = this.imgService.getImage(this.route.snapshot.params['id'])
}

}
