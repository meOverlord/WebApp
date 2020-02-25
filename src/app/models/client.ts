import { firestore } from 'firebase';


export interface ILegalId {
	id: string;
	type?: string;
}

export interface LastTasks {
	taskId: string;

}

export interface ILastTasks extends LastTasks {
	date: Date;
}

export interface DBLastTasks extends LastTasks {
	date: firestore.Timestamp;
}

export interface Client {
	id: string;
	name: string;
	preferedLanguage?: string;
	legalIds?: Array<ILegalId>;
}

export interface IClient {
	lastTask: ILastTasks;
}

export interface DBClient extends Client {
	userId: string;
	lastTask: DBLastTasks;
}
