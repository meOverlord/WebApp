import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IClient, DBClient, Client } from 'src/app/models/client';

export const CLIENTS_COLLECTION = 'clients';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {
	constructor(
		private fireAuth: AngularFireAuth,
		private fireStore: AngularFirestore ) {}

	public get myClients(): Observable<Array<IClient>> {
		return this.fireAuth.user.pipe(
			mergeMap((user) => this.fireStore.collection<IClient>(CLIENTS_COLLECTION,
				ref => ref.where('userId', '==', user.uid)).snapshotChanges()),
			map(documents => documents.map(document => {
				const client = document.payload.doc.data();
				const id = document.payload.doc.id;
				return { id, ...client };
			})
			)
		);
	}

	public getRecentClients(historyCount: number): Observable<Array<IClient>> {
		return this.fireAuth.user.pipe(
			mergeMap((user) => this.fireStore.collection<DBClient>(CLIENTS_COLLECTION,
				ref => ref.where('userId', '==', user.uid)
					.orderBy('lastTask.date').limit(historyCount)
				).snapshotChanges()),
			map(documents => documents.map(document => {
				const dbClient = document.payload.doc.data();
				const client: IClient = dbClient as any as IClient;
				client.lastTask.date = dbClient.lastTask.date.toDate();
				const id = document.payload.doc.id;
				return { id, ...client } as IClient;
			})
			)
		);
	}
}
