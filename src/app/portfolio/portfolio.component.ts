import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../shared/theme.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isDarkTheme: boolean = false;
  color: string = '#ffffff80';
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;


  constructor(private router: Router, private themeService: ThemeService) {}

  isActive(route: string) {
    return this.router.url.includes(route);
  }

  onselect(){
    this.router.navigate(['projects']);
  }



  ngOnInit() {
    this.themeService.getDarkTheme().subscribe(isDark => {
      this.isDarkTheme = isDark;
      this.onThemeToggled(isDark);
    });
  }

  onThemeToggled(isDarkTheme: boolean) {
    console.log("changing background");
    this.color = this.isDarkTheme ? 'rgba(255, 255, 255, 0.08)': '#ffffff80' ; 
    
  }

}
