import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SinginComponent} from '../../login/singin/singin.component';
import {SingupComponent} from '../../login/singup/singup.component';
import {HomeComponent} from '../../home/home/home.component'
import {NewarticleComponent} from '../../article/newarticle/newarticle.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'singin',
        component: SinginComponent
      },
      {
        path: 'singup',
        component: SingupComponent
      },
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'newarticle',
        component : NewarticleComponent
      }
    ])

  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
