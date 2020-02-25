import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask } from '@models/task';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

	public tasks: Array<ITask>;

	constructor(private tasksService: TaskService) { }

	ngOnInit(): void {
		this.tasksService.getMyTasks()
		.pipe(
			tap(d => console.log(d))
		)
		.subscribe(tasks => this.tasks = tasks);
	}
}
