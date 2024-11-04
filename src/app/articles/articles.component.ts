import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles = [
    { title: 'Essential SQL Commands for Data Science', link: 'https://medium.com/@ndungudennis250/essential-sql-commands-for-data-science-f4fd7495599b' },
    { title: 'Exploratory Data Analysis Ultimate Guide', link: 'https://medium.com/@ndungudennis250/exploratory-data-analysis-ultimate-guide-61a3fd97e07' },
    { title: 'SQL for Data Analysis', link: 'https://medium.com/@ndungudennis250/sql-for-data-analysis-117fece2b807' },
   
  ];

}
