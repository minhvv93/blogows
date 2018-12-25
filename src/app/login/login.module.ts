import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [SinginComponent, SingupComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
