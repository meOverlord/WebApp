export interface ILegalId {
	id: string;
	type?: string;
}


export interface ILastTasks {
	taskId: string;
	date: Date;
}


export interface IClient {
	id: string;
	name: string;
	preferedLanguage?: string;
	legalIds?: Array<ILegalId>;
	lastTask: ILastTasks;
}
