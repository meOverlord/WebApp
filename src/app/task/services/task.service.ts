import { Injectable } from '@angular/core';
import { ITask } from '@models/task';
import { Observable } from 'rxjs';

export const TASKS_COLLECTION = 'tasks';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	constructor( ) {}

	public  getMyTasks(start?: number, count?: number): Observable<Array<ITask>> {
		if (!start) {
			start = 0;
		}
		if (!count) {
			count = 10;
		}
		return null;
	}
}
