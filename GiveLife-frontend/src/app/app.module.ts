import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{TestComponent} from "./test/test.component"
import { HttpClientModule } from "@angular/common/http";
import { JwtService } from './service/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
