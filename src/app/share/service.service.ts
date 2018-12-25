import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private data;
  private dk ;

  setData(data){
    this.data = data;
  }
  getdata(){
    let email = this.data;
    //console.log(email);
   return email;
  }

}
