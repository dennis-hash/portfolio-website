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
          role:'Designed and built the back-end',
          description: 'An innovative app for management of site like work places',
          description1: 'The SITE MANAGER app is an innovative tool designed to enhance the organization and management of site-like work places, which typically feature a contractor or project owner responsible for project finances, a foreman overseeing daily operations, workers earning wages on a daily or hourly basis, payment distribution at regular intervals (usually weekly), and daily clock-ins for workers. The contractor or project owner relies on receiving a list of workers and their pay rates in order to effectively allocate funds and ensure timely payment processing.',
          image: 'assets/sitem/S0.png',
          details: {
            images: ['assets/sitem/S3.jpeg', 'assets/sitem/S4.jpeg','assets/sitem/S11.jpeg',  'assets/sitem/S8.jpeg', 'assets/sitem/S6.jpeg', 'assets/sitem/S1.jpeg',
            'assets/sitem/S10.jpeg','assets/sitem/S12.jpeg','assets/sitem/S13.jpeg', 'assets/sitem/S14.jpeg','assets/sitem/S15.jpeg','assets/sitem/S17.jpeg','assets/sitem/S18.jpeg'
            ,'assets/sitem/S20.jpeg','assets/sitem/S21.jpeg','assets/sitem/S22.jpeg','assets/sitem/S23.jpeg','assets/sitem/S24.jpeg','assets/sitem/S25.jpeg','assets/sitem/S26.jpeg','assets/sitem/S7.jpeg','assets/sitem/S5.jpeg','assets/sitem/S27.jpeg',
          ],

            technologies: ['Flutter', 'Laravel','MySQL','Daraja B2C & C2B APIs'],
            github: 'https://github.com/username/project1',
            document: null,
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.sitemaster.sma&pcampaignid=web_share'
          }
        },
        {
          id: 2,
          title: 'Task Pro',
          year:'2023',
          role:'Designed and built the back-end',
          description: 'Task and communication platform for employees and management.',
          description1: 'In todays fast-paced corporate environment, efficient task management is crucial for the success of any organisation. Company ABC has identified the need for a robust system to manage tasks and provide visibility into the progress of various activities, leading to the emergence of TaskPro as a comprehensive platform for task management and reporting. TaskPro aims to streamline task allocation, monitoring, and reporting, addressing challenges such as lack of visibility, delays, miscommunication, and missed deadlines. It offers an intuitive user interface, dynamic task stages, automated weekly reports, high solution quality standards, and effective collaboration within the team. The software is positioned as a tailored solution to enhance productivity and accountability across all levels of the organisation by simplifying task tracking, adapting to changing project requirements, and ensuring robust data security measures.',
          image: 'assets/TaskPro/logo3.png',
          details: {
            images: ['assets/TaskPro/S8.png', 'assets/TaskPro/s0.png', 'assets/TaskPro/S1.png', 'assets/TaskPro/S2.png', 
            'assets/TaskPro/S3.png', 'assets/TaskPro/S4.png', 'assets/TaskPro/S5.png','assets/TaskPro/S7.png'],
            technologies: ['Angular', 'Spring boot','MySQL'],
            github: 'https://github.com/dennis-hash/Task-Pro-API',
            document: 'https://docs.google.com/document/d/123xVrphTMIQnbXv8QIgALipTOG3dvsMdxyGwRYFvTFQ/edit?usp=sharing',
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.sitemaster.sma&pcampaignid=web_share'
          }
        },
        {
          id: 3,
          title: 'PropEase',
          year:'2023',
          role:'Designed and built the back-end',
          description: 'PropEase app helps users find properties for sale, rent, shops, Airbnb, etc',
          description1: 'PropEase app allows users to find properties that are on sale, rentals, shops, airbnb etc. Anyone can upload their property and connect with potential customers.',
          image: 'assets/propease/propease.png',
          details: {
            images: ['assets/propease/S0.webp', 'assets/propease/S1.webp', 'assets/propease/S2.webp', 
            'assets/propease/S3.webp', 'assets/propease/S4.webp'],
            technologies: ['Kotlin', 'Spring Boot','MySQL','Rabit MQ','Daraja APIs'],
            github: 'https://github.com/username/project1',
            document: 'https://github.com/username/project1',
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.propertymanagement.tms&pcampaignid=web_share'
          }
        },
        {
          id: 4,
          title: 'Cash Ledger',
          year:'2022',
          role: 'df',
          description: 'Ledger app that will help you track and analyze all your M-PESA transactions. ',
          description1: 'Cash Ledger is a simple yet powerful SMS based ledger app that will help you track and analyze all your M-PESA transactions. The app helps you see the sum total of your daily money-in and money-out together with the individual transactions. The date range can be adjusted as you wish and so you can see the total money-in and money-out, together with the individual transactions, for a time range of your choice. Cash Ledger enables you to analyze money received from various grouped sources, including M-SHWARI accounts, as well as money sent grouped into money sent to personal mobile accounts, Till accounts, Paybill accounts, M-SHWARI and KCB transfers and M-PESA withdrawals. Using the search feature, you can further narrow down transactions based on specific accounts and within a chosen date range. So you can track your fuliza loans, hustler fund loans, reversals, and more. The app also allows you to create custom categories, to analyze transactions grouped transactions. of information available. Additionally, students may be hesitant to reach out to administrative staff for fear of not having all the information needed to ask the right question. This can lead to frustration and confusion for students, and can also put a strain on the universitys administrative staff, who are responsible for answering these inquiries.Cash Ledger also allows you to download statements of your transactions in pdf format. Using the search and calendar features, you can customize the statements to be downloaded.',
          image: 'assets/cashLedger/logo.png',
          details: {
            images: ['assets/cashLedger//S0.png', 'assets/cashLedger/S1.png', ],
            technologies: ['Flutter', 'NodeJS','DialogFlow', 'Firebase'],
            github: 'https://github.com/dennis-hash/UoNchatbot',
            document: 'https://docs.google.com/document/d/1xQl-kLcCsFu4nw_OE-GsxeT492bLQ9b8T2dn0sVimz0/edit?usp=sharing',
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.propertymanagement.tms&pcampaignid=web_share'
          }
        },
        {
          id: 5,
          title: 'UoN AI agent',
          year:'2022',
          role: 'df',
          description: 'Improved chatbot for UoN streamlines info access for new students',
          description1: 'New students at the University of Nairobi often have difficulty obtaining information from the universitys website due to the complexity of the websites navigation and the large volume of information available. Additionally, students may be hesitant to reach out to administrative staff for fear of not having all the information needed to ask the right question. This can lead to frustration and confusion for students, and can also put a strain on the universitys administrative staff, who are responsible for answering these inquiries.',
          image: 'assets/uonbot/logo.png',
          details: {
            images: ['assets/uonbot/S0.png', 'assets/uonbot/S1.png', ],
            technologies: ['Flutter', 'NodeJS','DialogFlow', 'Firebase'],
            github: 'https://github.com/dennis-hash/UoNchatbot',
            document: 'https://docs.google.com/document/d/1xQl-kLcCsFu4nw_OE-GsxeT492bLQ9b8T2dn0sVimz0/edit?usp=sharing',
            apiDocument: 'http://172.105.90.112/site-manager-backend/SiteManager/public/swagger/',
            website: 'https://play.google.com/store/apps/details?id=com.propertymanagement.tms&pcampaignid=web_share'
          }
        },
        {
          id: 6,
          title: 'MenuMe',
          year:'2022',
          role: 'Full stack',
          description: 'Voice-order/chat your food with ease',
          description1: 'This app is a voice-controlled food ordering chatbot designed to streamline the ordering process for restaurants and customers. By using voice commands, customers can browse menus, place orders with special requests, and receive confirmations - all through a convenient mobile app. This not only improves customer experience but also reduces workload for restaurant staff and ensures order accuracy.',
          image: 'assets/MenuMe/sd.png',
          details: {
            images: ['assets/MenuMe/S1.jpeg', 'assets/MenuMe/S2.jpeg', 'assets/MenuMe/S3.png', 'assets/MenuMe/S4.jpeg', ],
            technologies: ['Flutter', 'NodeJS','DialogFlow', 'Firebase'],
            github: 'https://github.com/dennis-hash/FoodOderingApp-with-an-AI-Agent',
            document: 'https://docs.google.com/document/d/1cp7ciN7PnTkm4Wy01GYS_-r8Y9EDx_pt_io-EU7Ko8g/edit?usp=sharing',
            apiDocument: 'null',
            website: 'null'
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