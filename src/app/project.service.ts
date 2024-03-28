import { Injectable } from '@angular/core';
import { Project } from './project.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [
        {
          id: 1,
          title: 'Site Manager',
          year:'2023',
          description: 'An app that helps in management of site like work places',
          description1: 'The SITE MANAGER app is an innovative tool designed to enhance the organization and management of site-like work places, which typically feature a contractor or project owner responsible for project finances, a foreman overseeing daily operations, workers earning wages on a daily or hourly basis, payment distribution at regular intervals (usually weekly), and daily clock-ins for workers. The contractor or project owner relies on receiving a list of workers and their pay rates in order to effectively allocate funds and ensure timely payment processing.',
          image: 'assets/sitem/s1.webp',
          details: {
            images: ['assets/sitem/s1.webp', 'assets/sitem/s2.webp', 'assets/sitem/s3.webp', 'assets/sitem/s4.webp', 'assets/sitem/s5.webp', 'assets/sitem/s6.webp', 'assets/sitem/s7.webp'],
            technologies: ['Flutter', 'Laravel','MySQL'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.sitemaster.sma&pcampaignid=web_share'
          }
        },

      ];

  constructor() {}

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

}