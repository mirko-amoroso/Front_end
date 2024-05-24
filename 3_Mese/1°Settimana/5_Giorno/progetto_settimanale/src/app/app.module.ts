import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { HomeComponent } from './components/home/home.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { NavbarComponent } from './main_components/navbar/navbar.component';
import { FooterComponent } from './main_components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FiatComponent,
    HomeComponent,
    FordComponent,
    AudiComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
