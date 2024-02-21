import { Injectable } from '@angular/core';
import { Project } from './project.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [
        {
          id: 1,
          title: 'SiteManager',
          year:'2023',
          description: 'An app that helps in management of site like work places',
          description1: 'An app that helps in management of site like work places',
          image: 'assets/a.jpeg',
          details: {
            images: ['assets/a.jpeg', 'assets/a.jpeg'],
            technologies: ['Flutter', 'Laravel','MySQL'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'https://github.com/username/project1',
            website: 'https://project1.com'
          }
        },
        {
          id: 2,
          title: 'Task Pro',
          year:'2024',
          description: 'For Software Development Life Cycle Management',
          description1: 'An app that helps in management of site like work places',
          image: 'assets/d.png',
          details: {
            images: ['path/to/project2/image1.jpg', 'path/to/project2/image2.jpg'],
            technologies: ['Angular', 'Spring Boot', 'Postgresql'],
            github: 'https://github.com/username/project2',
            document: 'https://github.com/username/project1',
            apiDocument: 'https://github.com/username/project1',
            website: 'https://project2.com'
          }
        },
        {
          id: 3,
          title: 'FastFood',
          year:'2023',
          description: 'Food Ordering App with an AI assistant',
          description1: 'An app that helps in management of site like work places',
          image: 'assets/c.jpeg',
          details: {
            images: ['path/to/project1/image1.jpg', 'path/to/project1/image2.jpg'],
            technologies: ['Flutter', 'Firebase'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'https://github.com/username/project1',
            website: 'https://project1.com'
          }
        },
        {
          id: 4,
          title: 'UoN Chatbot',
          year:'2023',
          description: 'Your AI friend, simplifying registration and answering your questions with a smile',
          description1: 'An app that helps in management of site like work places',
          image: 'assets/c.jpeg',
          details: {
            images: ['path/to/project1/image1.jpg', 'path/to/project1/image2.jpg'],
            technologies: ['Flutter', 'Firebase'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'https://github.com/username/project1',
            website: 'https://project1.com'
          }
        },
        {
          id: 5,
          title: 'Farm Direct',
          year:'2022',
          description: 'A platform that enables farmers to sell their products directly to consumers',
          description1: 'An app that helps in management of site like work places',
          image: 'assets/c.jpeg',
          details: {
            images: ['path/to/project1/image1.jpg', 'path/to/project1/image2.jpg'],
            technologies: ['PHP', 'Javascript','MySQL'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'https://github.com/username/project1',
            website: 'https://project1.com'
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