import { Component } from '@angular/core';
import { Submission } from '../../data';
import { SUBMISSIONS } from '../../mock-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  submissions: Submission[] = SUBMISSIONS;
}
