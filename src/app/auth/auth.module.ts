import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RootComponent } from './components/root/root.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
	declarations: [RootComponent, SigninComponent, SignupComponent],
	imports: [
		CommonModule,
		FormsModule,
		AuthRoutingModule
	]
})
export class AuthModule { }
