import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
	imports: [CommonModule, MainRoutingModule],
	declarations: [
		RootComponent,
		HomeComponent,
		MenuComponent
	]
})
export class MainModule {}
