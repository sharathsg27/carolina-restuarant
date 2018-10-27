import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import {AppRoutingModule} from '../app.routing.module';
import { NavComponent } from '../components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
