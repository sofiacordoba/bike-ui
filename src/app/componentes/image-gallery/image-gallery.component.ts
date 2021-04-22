import { Component, OnChanges} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImgService } from 'src/app/servicios/img.service';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnChanges {
  image: any[] | undefined;
  filterBy: string = 'all' ;
  allImages: any[] = [];


  constructor(private imageService: ImgService) { //aca
    this.allImages = this.imageService.getImages();
}

  
   ngOnChanges() {
    this.allImages = this.imageService.getImages();
   }
  
}  
/*constructor(private _config:NgbCarouselConfig) {
      _config.interval = 3000;
      _config.pauseOnHover = true;
      _config.showNavigationArrows = true;
           
*/


