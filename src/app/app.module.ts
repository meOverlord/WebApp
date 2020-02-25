import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { SignEffect } from './store/effects/sign.effect';
import { reducers } from './store/reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		EffectsModule.forRoot([SignEffect]),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		SharedModule,
		AppRoutingModule,
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
