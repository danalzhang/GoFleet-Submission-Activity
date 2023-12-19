import { Component, Input } from '@angular/core';
import { Submission } from '../../data'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() submission!: Submission;

  getStatusClass(status: string): any {
    return {
      'uncomplete-class': status === 'Uncomplete',
      'complete-class': status === 'Complete',
      'review-class': status === 'Needs Review'
    };
  }
}
