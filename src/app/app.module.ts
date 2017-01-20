import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MarketComponent } from './market/market.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import { PopoverModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MarketComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
