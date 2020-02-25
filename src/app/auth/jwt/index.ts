const tokenName = 'access_token';

export function getJwtToken() {
	return localStorage.getItem(tokenName);
}

export function setJwtToken(token: string) {
	return localStorage.setItem(tokenName, token);
}
