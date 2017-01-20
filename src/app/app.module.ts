import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MarketComponent } from './market/market.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AuthService } from './shared/auth.service';

export const firebaseConfig = {
    apiKey: 'AIzaSyCygtE4KSt0-Li0JBNeQoQ9GboFoZpfHHU',
    authDomain: 'hipapp-sn.firebaseapp.com',
    databaseURL: 'https://hipapp-sn.firebaseio.com',
    storageBucket: 'hipapp-sn.appspot.com',
    messagingSenderId: '669200317623'
};

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
