import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImageDetailsComponent } from './componentes/image-details/image-details.component';
import { ImageGalleryComponent } from './componentes/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './componentes/view-registration/view-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BikeService } from './servicios/bike.service';
import { FilterimagePipe } from './filterimage.pipe';
import { ImgService } from './servicios/img.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    ImageDetailsComponent,
    ImageGalleryComponent,
    ViewRegistrationComponent,
    FilterimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [BikeService, ImgService, FilterimagePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
