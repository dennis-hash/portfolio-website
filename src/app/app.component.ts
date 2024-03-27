import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dennis-portfolio';
  backgroundColor: string = 'rgb(240, 231, 219)';
  textColor: string = 'black';
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getDarkTheme().subscribe(isDark => {
      this.isDarkTheme = isDark;
      this.onThemeToggled(isDark);
    });
  }

  onThemeToggled(isDarkTheme: boolean) {
    console.log("changing background");
    this.backgroundColor = isDarkTheme ? '#202023' : 'rgb(240, 231, 219)';
    this.textColor = isDarkTheme ? 'white' : 'black';
  }
}


