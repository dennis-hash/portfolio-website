import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AnimationComponent } from './animation/animation.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DogLoaderComponent } from './dog-loader/dog-loader.component';
import { DogcontainerComponent } from './dogcontainer/dogcontainer.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ToggleButtonComponent,
    HomeComponent,
    ArticlesComponent,
    PortfolioComponent,
    AnimationComponent,
    ProjectComponentComponent,
    ProjectDetailsComponent,
    DogLoaderComponent,
    DogcontainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    //PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
