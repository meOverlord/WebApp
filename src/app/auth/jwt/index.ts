const tokenName = 'access_token';

export function getJwtToken() {
	console.log('Get jwt token', localStorage.getItem(tokenName));
	return localStorage.getItem(tokenName) || '';
}

export function setJwtToken(token: string) {
	return localStorage.setItem(tokenName, token);
}
