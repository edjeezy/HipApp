import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { BlogComponent } from './blog/blog.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
    { path: '', redirectTo : 'home', pathMatch : 'full' },
    { path: 'home', component : HomeComponent },
    { path: 'market', component : MarketComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
