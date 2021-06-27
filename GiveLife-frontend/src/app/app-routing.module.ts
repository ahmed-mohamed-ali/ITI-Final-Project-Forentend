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
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'post', component: PostComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'cupon', component: CuponComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'postform', component: PostFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'cupons', component: CuponsComponent},
  {path:'test',component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
