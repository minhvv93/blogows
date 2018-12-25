import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {



  constructor(private router : Router , private service : ServiceService) { }
  dieukien = true;
  user = this.service.getdata();
  checklogin(){
    if(this.user == null){
      this.dieukien = true;
    }else{
      this.dieukien = false;
    }
  }
  
  
  
  ngOnInit() {
    this.checklogin();
    
  }
  singin(){
    
  this.router.navigate(['/singin']);
    
    
  }
  singup(){
  this.router.navigate(["/singup"])
    
  }
  home(){
  this.router.navigateByUrl('')
  }
  newarticle(){
    this.router.navigate(["/newarticle"]);
  }
  setting(){
    alert("seting")
  }
  profile(){
    alert("profile")
  }


}
