import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AbstractApiComponent } from './components/abstract-api/abstract-api.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
path: 'login',
component: LoginComponent
  },
  {
    path: 'users/add',
    component: RegistrarComponent
  },
  {
    path: 'maps',
    component: AbstractApiComponent
  },
  {
    path: 'clima',
    component: WeatherComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
