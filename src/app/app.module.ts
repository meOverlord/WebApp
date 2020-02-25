import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getJwtToken } from './auth/jwt';
import { backendConfig } from './shared/config/backend';
import { SharedModule } from './shared/shared.module';
import { SignEffect } from './store/effects/sign.effect';
import { reducers } from './store/reducers/reducers';



@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		EffectsModule.forRoot([SignEffect]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		ApolloModule,
		HttpLinkModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: getJwtToken,
			}
		}),
		SharedModule,
		AppRoutingModule,
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: (httpLink: HttpLink) => {
				const authMiddleware = new ApolloLink((operation, forward) => {
					// add the authorization to the headers
					operation.setContext({
						headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || null)
					});

					return forward(operation);
				});
				return {
					cache: new InMemoryCache(),
					link: concat(authMiddleware, httpLink.create({
						uri: backendConfig.graphql
					})),
				};
			},
			deps: [HttpLink]
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
