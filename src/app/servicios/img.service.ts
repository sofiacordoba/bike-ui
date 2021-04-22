import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})    
// creo una clase para inyectarse a demanda en el lugar que necesite

export class ImgService 
{
  allImages: any[] = [];
  constructor() { }


  //Slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio
  // hasta fin (fin no incluido). El array original no se modificará.
  getImages(){
    return this.allImages = DetallesImagen.slice(0);
  }

 getImage(id: number){
  return DetallesImagen.slice(0).find(Images => Images.id == id);
 }

}

const DetallesImagen = [
  {"id": 1, "brand":"adultos" , "url": "assets/images/bici1.jpg"},
  {"id": 2, "brand":"adultos" , "url": "assets/images/bici2.jpg"},
  {"id": 3, "brand":"adultos" , "url": "assets/images/bici3.jpg"},
  {"id": 4, "brand":"ultimo" , "url": "assets/images/bici4.jpg"},
  {"id": 5, "brand":"eco" , "url": "assets/images/bici5.jpg"},
  {"id": 6, "brand":"adultos" , "url": "assets/images/bici6.jpg"},
  {"id": 7, "brand":"junior" , "url": "assets/images/bici7.jpg"},
  {"id": 8, "brand":"adultos" , "url": "assets/images/bici8.jpg"},
  {"id": 9, "brand":"junior" , "url": "assets/images/bici9.jpg"},
  {"id": 10, "brand":"junior" , "url": "assets/images/bici10.jpg"},
  {"id": 11, "brand":"junior" , "url": "assets/images/bici11.jpg"},
  {"id": 12, "brand":"eco" , "url": "assets/images/bici12.jpg"},
  {"id": 13, "brand":"eco" , "url": "assets/images/bici13.jpg"},
  {"id": 14, "brand":"eco" , "url": "assets/images/bici14.jpg"},
  {"id": 15, "brand":"eco" , "url": "assets/images/bici15.jpg"},
  {"id": 16, "brand":"motor" , "url": "assets/images/bici16.jpg"},
  {"id": 17, "brand":"ultimo" , "url": "assets/images/bici17.jpg"},
  {"id": 18, "brand":"adultos" , "url": "assets/images/bici18.jpg"},
  {"id": 19, "brand":"ultimo" , "url": "assets/images/bici19.jpg"},
  {"id": 20, "brand":"adultos" , "url": "assets/images/bici20.jpg"},
  {"id": 21, "brand":"ultimo" , "url": "assets/images/bici21.jpg"},
  {"id": 22, "brand":"motor" , "url": "assets/images/bici22.jpg"},
  {"id": 23, "brand":"motor" , "url": "assets/images/bici23.jpg"},
  {"id": 24, "brand":"motor" , "url": "assets/images/bici24.jpg"},
  {"id": 25, "brand":"motor" , "url": "assets/images/bici25.jpg"},
  {"id": 26, "brand":"motor" , "url": "assets/images/bici26.jpg"},
  {"id": 27, "brand":"junior" , "url": "assets/images/bici27.jpg"},
  {"id": 28, "brand":"eco" , "url": "assets/images/bici28.jpg"}
  ]
