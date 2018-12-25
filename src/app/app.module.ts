import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
// import {ApiService} from './share/api.service';
import { ServiceService } from './share/service.service'
import { LayoutComponent } from './share/layout/layout.component';
import { ShareModule } from './share/share.module';
import { LoginModule } from './login/login.module';
import { SinginComponent } from './login/singin/singin.component';
import { SingupComponent } from './login/singup/singup.component';
import { AppRoutingModule } from './share/app-routing/app-routing.module'
import {NewarticleComponent} from './article/newarticle/newarticle.component';
import {ArticleModule} from './article/article.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    SinginComponent,
    SingupComponent,
    NewarticleComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ShareModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ArticleModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
