import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project as ProjectInterface} from '../project.interface';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  
  project: ProjectInterface | undefined;
 

  constructor(private route: ActivatedRoute,private projectService: ProjectService) {}
  faExternalLink = faExternalLink;

  ngOnInit() {
     let projectId;
     projectId = this.route.snapshot.paramMap.get('projectId');
     console.log("projectid",projectId);
     if (projectId !== null) {
      projectId = parseInt(projectId, 10);
    }
    console.log("projectid",projectId);

    if (projectId) {
        this.project = this.projectService.getProjectById(projectId);
        
      } else {
        console.error('Project not found:', projectId);
        
      }
    }
  }


