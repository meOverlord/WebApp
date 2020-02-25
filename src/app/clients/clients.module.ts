import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsRootComponent } from './components/clients-root/clients-root.component';
import { ClientsDashbordComponent } from './components/clients-dashbord/clients-dashbord.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
	declarations: [ClientsRootComponent, ClientsDashbordComponent, ClientsTableComponent],
	imports: [
		CommonModule,
		ClientsRoutingModule,
		SharedModule
	]
})
export class ClientsModule { }
