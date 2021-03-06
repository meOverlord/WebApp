import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/models/client';

export const CLIENTS_COLLECTION = 'clients';



@Injectable({
	providedIn: 'root'
})
export class ClientsService {
	constructor(
		private http: HttpClient) {}

	public get myClients(): Observable<Array<IClient>> {
		return null;
	}

	public getRecentClients(historyCount: number): Observable<Array<IClient>> {
		return null;
	}
}
