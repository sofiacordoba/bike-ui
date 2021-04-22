import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importa componentes
import { AdminComponent } from './componentes/admin/admin.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImageGalleryComponent } from './componentes/image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './componentes/image-details/image-details.component'
import { ViewRegistrationComponent } from './componentes/view-registration/view-registration.component';


const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
   },
  {
    path: 'gallery',
    component: ImageGalleryComponent
  },
  {
    path: 'image/:id',
    component: ImageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
