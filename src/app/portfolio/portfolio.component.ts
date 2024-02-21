import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private router: Router) {}

  isActive(route: string) {
    return this.router.url.includes(route);
  }

  onselect(){
    this.router.navigate(['projects']);
  }

}
