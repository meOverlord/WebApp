import { environment } from './../../../environments/environment';

export const backendConfig = {
	url: environment.backend,
	graphql: environment.backend + 'graphql',
};

export function backendEndpoint(endpoint: string, params?){
	return backendConfig.url + endpoint;
}
