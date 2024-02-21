import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project as ProjectInterface} from '../project.interface';
import { ProjectService } from '../project.service';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    images: string[];
    technologies: string[];
    github: string;
    website: string;
  };
}

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent {


  constructor(private router: Router,private projectService: ProjectService) {}

  selectedProject?: Project;

  isActive(route: string) {
    return this.router.url.includes(route);
  }


  onSelect(projectId: number) {
    this.selectedProject = this.projectService.getProjectById(projectId);
    if (this.selectedProject) {
      this.router.navigate(['project-details', projectId]);
      console.log("id",projectId);
    }
  }

  getProjects() {
    return this.projectService.getAllProjects();
  }


  clearSelection() {
    this.selectedProject = undefined;
  }

}
