import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [ 
{ path: '', redirectTo : 'video-player', pathMatch: "full" },
{ path: 'video-player', component: VideoPlayerComponent },
{ path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
