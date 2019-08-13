import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapsService } from './maps.service';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MainnavComponent,
    LandingPageComponent,
    EventsComponent,
    EventsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
