import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsRootComponent } from './components/clients-root/clients-root.component';
import { ClientsDashbordComponent } from './components/clients-dashbord/clients-dashbord.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';


const routes: Routes = [
  {
    path: '', component: ClientsRootComponent,
    children: [
      {path: '', component: ClientsDashbordComponent},
      {path: 'list', component: ClientsTableComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
