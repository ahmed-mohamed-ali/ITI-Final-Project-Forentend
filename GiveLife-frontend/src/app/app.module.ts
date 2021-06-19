import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{TestComponent} from "./test/test.component"
import { HttpClientModule } from "@angular/common/http";
import { JwtService } from './service/jwt.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Home page component
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';

//Needer component
import { CuponComponent } from './components/cupon/cupon.component';

import { PostFormComponent } from './components/post-form/post-form.component';

//profile component
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FilterComponent } from './components/filter/filter.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TestComponent
=======
    HeaderComponent,
    FooterComponent,
    CuponComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    FilterComponent,
    PostFormComponent,
    PostComponent
>>>>>>> 4537c0debdbd8630efcb8745c638354f47fcefd2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> 4537c0debdbd8630efcb8745c638354f47fcefd2
  ],
  providers: [JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
