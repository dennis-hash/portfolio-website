import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
  @Output() themeToggled = new EventEmitter<boolean>(); // Emitting boolean value for theme
  isDarkTheme: boolean = false;
  iconSource: string = '../assets/light_mode.svg';
  buttonColor: string = 'orange';
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.iconSource = this.isDarkTheme ? '../assets/dark_mode.svg' : '../assets/light_mode.svg';
    this.buttonColor = this.isDarkTheme ? 'purple' : 'orange'; // change color here
    this.themeToggled.emit(this.isDarkTheme); // Emitting boolean value for theme
  }
}
