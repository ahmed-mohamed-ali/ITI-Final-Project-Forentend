import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FilterComponent } from './components/filter/filter.component';
import { CuponComponent } from './components/cupon/cupon.component';
import { CuponsComponent } from './components/cupons/cupons.component';
import {TestComponent} from './test/test.component';

import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ProfileComponent } from './components/profile/profile.component';
<<<<<<< HEAD
import { AuthGuardService } from './service/auth-guard.service';
=======
//import { DonateComponent } from './components/donate/donate.component';
>>>>>>> 56f73d80aca222a5a3dbfe0d90e5438dbfa1f88d

const routes: Routes = [
  { path: 'post', component: PostComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'cupon', component: CuponComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'postform', component: PostFormComponent},
  {path: 'profile', component: ProfileComponent},
<<<<<<< HEAD
  {path: 'posts', component: PostsComponent},
  {path: 'cupons', component: CuponsComponent},
  {path:'test',component:TestComponent}
=======
  //{path: 'donate', component: DonateComponent},


>>>>>>> 56f73d80aca222a5a3dbfe0d90e5438dbfa1f88d

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
