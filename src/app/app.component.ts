import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dennis-portfolio';

  backgroundColor: string = 'rgb(240, 231, 219)';
  textColor: string = 'black';

  onThemeToggled(isDarkTheme: boolean) {
    console.log("changing background");
    this.backgroundColor = isDarkTheme ? '#202023' : 'rgb(240, 231, 219)';
    this.textColor = isDarkTheme ? 'white' : 'black';
  }
}
