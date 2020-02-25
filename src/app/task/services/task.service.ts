import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { ITask } from '@models/task';
import { mergeMap, map, tap } from 'rxjs/operators';

export const TASKS_COLLECTION = 'tasks';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	constructor(
		private fireAuth: AngularFireAuth,
		private fireStore: AngularFirestore ) {}

	public  getMyTasks(start?: number, count?: number): Observable<Array<ITask>> {
		if (!start) {
			start = 0;
		}
		if (!count) {
			count = 10;
		}
		return this.fireAuth.user.pipe(
			mergeMap((user) => this.fireStore.collection<ITask>(TASKS_COLLECTION,
				ref => ref.where('userId', '==', user.uid)
					.orderBy('dueDate', 'desc')
					.limit(count)
				).snapshotChanges()),
			tap(d => console.log(d)),
			map(documents => documents.map(document => {
				const client = document.payload.doc.data();
				const id = document.payload.doc.id;
				return { id, ...client };
			})
			)
		);
	}
}
