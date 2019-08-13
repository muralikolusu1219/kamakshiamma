import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent {

  constructor(private route: ActivatedRoute, private router: Router){}

  naviagtePage(pageName){
    if(pageName=='landing'){
      this.router.navigate([`/landing`]);
      }
    else if(pageName=='home'){
    this.router.navigate([`/home`]);
    }
    if(pageName=='events'){
      this.router.navigate([`/events`]);
      }
  }
 
  

}
