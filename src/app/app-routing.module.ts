import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';


const routes: Routes = [
  {path:"home",component:ServerComponent},
  {path:"landing",component:LandingPageComponent},
  {path:"events",component:EventsComponent, children:[
    {path:"eventdetails",component:EventsDetailsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
