import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {ServiceService} from '../../share/service.service'
//import {TransferdataService} from '../../service/transferdata.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder : FormBuilder , private router : Router , private service : ServiceService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
  })

  }
  login(){
    const val = this.form.value;
    this.service.setData(val.email)
    
    //console.log(val.email);
    //console.log(val.password);
    if(val.email==="minhvv" && val.password==="1234"){
      console.log('ban dang nhap thanh cong');
      let dk = false;
      this.service.setdk(dk);
      this.router.navigateByUrl("")
    }else{
      alert("user chua ton tai , dk ngay")
    }

  }
  Singup(){
    this.router.navigate(["/singup"])
    
  }


}
