import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface TasksReqElement {
  Tasks: number;
  Requirement: string;
}

// TASK: 3. Make Table Dynamic

const TASKSREQ_DATA: TasksReqElement[] = [
  {Tasks: 1, Requirement: 'Carry out all tasks'},
  {Tasks: 2, Requirement: 'Carry out additional tasks'},
  {Tasks: 3, Requirement: 'I see more tasks..'},
  {Tasks: 4, Requirement: 'He tasks me...'},
  {Tasks: 5, Requirement: 'More Tasks'},
  ];

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html',
})

export class ListComponent {
  displayedColumns: string[] = ['Tasks', 'Requirement'];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<TasksReqElement> {
  data = new BehaviorSubject<TasksReqElement[]>(TASKSREQ_DATA);

  connect(): Observable<TasksReqElement[]> {
    return this.data;
  }

  disconnect() {}
}
