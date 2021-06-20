import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FilterComponent } from './components/filter/filter.component';
import { CuponComponent } from './components/cupon/cupon.component';
import { PostComponent } from './components/post/post.component'

const routes: Routes = [
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'signin', component: SignInComponent,
  },
  {
    path: 'filter', component: FilterComponent,
  },
  {
    path: 'cupon', component: CuponComponent,
  },
  {
    path: '', component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
