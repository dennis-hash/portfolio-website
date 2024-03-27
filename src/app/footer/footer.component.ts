import { Component } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isDarkTheme: boolean = false;
  color: string = 'black';
  bcolor: string = '#ffffff40';


  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getDarkTheme().subscribe(isDark => {
      this.isDarkTheme = isDark;
      this.onThemeToggled(isDark);
    });
  }

  onThemeToggled(isDarkTheme: boolean) {
    console.log("changing background");
    this.color = this.isDarkTheme ? 'white' : 'black'; 
    this.bcolor = this.isDarkTheme ? '#20202380' : '#ffffff40'; 
  }

}
