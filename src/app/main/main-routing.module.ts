import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: RootComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'auth',
				loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
			{ path: 'clients', loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule) },
			{ path: 'tasks', loadChildren: () => import('../task/task.module').then(m => m.TaskModule) },
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }
