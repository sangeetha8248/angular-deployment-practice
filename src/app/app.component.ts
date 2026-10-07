import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task.model';

type Filter = 'all' | 'active' | 'completed';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  newTask = '';
  filter: Filter = 'all';

  tasks: Task[] = [
    { id: 1, title: 'Learn Git basics', completed: true },
    { id: 2, title: 'Create a GitHub repository', completed: false },
    { id: 3, title: 'Deploy the Angular app', completed: false }
  ];

  get filteredTasks(): Task[] {
    if (this.filter === 'active') {
      return this.tasks.filter((task) => !task.completed);
    }

    if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    }

    return this.tasks;
  }

  get completedCount(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  get activeCount(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }

  addTask(): void {
    const title = this.newTask.trim();

    if (!title) {
      return;
    }

    this.tasks = [
      ...this.tasks,
      {
        id: Date.now(),
        title,
        completed: false
      }
    ];

    this.newTask = '';
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  setFilter(filter: Filter): void {
    this.filter = filter;
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter((task) => !task.completed);
  }
}
