//Setup component
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{TestComponent} from "./test/test.component"
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Authentication component
import { JwtService } from './service/jwt.service';

//Home page component
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';

//Needer component
import { CuponComponent } from './components/cupon/cupon.component';
import { CuponsComponent } from './components/cupons/cupons.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';


//profile component
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FilterComponent } from './components/filter/filter.component';


// auth guard service
import { AuthGuardService } from './service/auth-guard.service';
import { DonateComponent } from './components/donate/donate.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    CuponComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    FilterComponent,
    PostFormComponent,
    PostComponent,
    ProfileComponent,
    PostsComponent,
    CuponsComponent,
    DonateComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule

  ],
  providers: [JwtService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 