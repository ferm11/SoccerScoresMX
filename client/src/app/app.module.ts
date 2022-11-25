import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScoresListComponent } from './components/scores-list/scores-list.component';
import { ScoresService } from './services/scores.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AbstractApiComponent } from './components/abstract-api/abstract-api.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { YoutubePipe } from './pipe/youtube.pipe';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    NavigationComponent,
    ScoresListComponent,
    AbstractApiComponent,
    YoutubePipe,
    YoutubeComponent,
    WeatherComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePayButtonModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-e80k845i.us.auth0.com',
      clientId: 'CeNg5a4wt4APCdQQbeyNWgAb6LtijHgc',
      cacheLocation : "localstorage",
      useRefreshTokens : true
    }),
  ],
  providers: [
    ScoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }