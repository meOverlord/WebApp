import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients/clients.service';
import { IClient } from '@models';

@Component({
	selector: 'app-clients-dashbord',
	templateUrl: './clients-dashbord.component.html',
	styleUrls: ['./clients-dashbord.component.scss']
})
export class ClientsDashbordComponent implements OnInit {
	public clients: Array<IClient> = null;

	constructor(private clientsService: ClientsService) {}

	ngOnInit(): void {
		this.clientsService.getRecentClients(5)
		.subscribe(clients => {
			this.clients = clients;
		});
	}
}
