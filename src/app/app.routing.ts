import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music/music.component';

const routes: Routes = [
    { path: '', redirectTo : 'music', pathMatch : 'full' },
    { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
