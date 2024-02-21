import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLemon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  transparent = true;
  selectedLink: string = '';
  faGithub = faGithub;
  faRocket = faLemon;

  constructor(private router: Router) {}

  @Output() themeToggled = new EventEmitter<boolean>();
  isDarkTheme: boolean = false;
  color: string = 'black';
  bcolor: string = '#ffffff40';

  isActive(route: string) {
    return this.router.url.includes(route);
  }

  goToHome(){
    this.router.navigate(['home']);
    this.selectedLink = 'home';
    
  }

  goToProjects(){
    this.router.navigate(['projects']);
    this.selectedLink = 'projects';
    
  }

  goToArticles(){
    this.router.navigate(['articles']);
    this.selectedLink = 'articles';
    
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.color = this.isDarkTheme ? 'white' : 'black'; 
    this.bcolor = this.isDarkTheme ? '#20202380' : '#ffffff40'; 
    this.themeToggled.emit(this.isDarkTheme);
  }

}
