import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectComponentComponent } from './project-component/project-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'projects',component: ProjectComponentComponent},
  { path: 'articles', component: ArticlesComponent },
  { path: 'home', component: HomeComponent},
  { path: 'project-details/:projectId', component:ProjectDetailsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
