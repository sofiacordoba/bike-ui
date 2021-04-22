import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

//localhost:9090/api/v1/bikes
//funcion que me RETORNA el listado de bikes
getBikes(){
  return this.http.get('/server/api/v1/bikes');
}

getBike(id: number){
  return this.http.get('/server/api/v1/bikes/' + id);
}
//funcion que me INSERTA  el listado de bikes en el backend
createBikeRegistration(bike:any){
  let body = JSON.stringify(bike);
  return this.http.post('/server/api/v1/bikes',body,httpOption);
}

}
