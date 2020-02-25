import { tap } from 'rxjs/operators';
import { ClientsService } from './../../services/clients/clients.service';
import { Component, OnInit } from '@angular/core';
import { IClient } from '@models';

@Component({
	selector: 'app-clients-table',
	templateUrl: './clients-table.component.html',
	styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {

	loading: boolean = undefined;
	clients: Array<IClient>;

	constructor(private clientsService: ClientsService) { }

	ngOnInit(): void {
		this.loading = true;
		this.clientsService.myClients.pipe(
			tap(clients => console.log(clients))
		)
		.subscribe(
			(clients) => {
				this.loading = false;
				this.clients = clients;
			}
		);
	}
}
