export interface ITask {
	id: string;
	label: string;
	startDate: Date;
	endDate: Date;
	dueDate: Date;
	clientId: string;
}

export interface DBCtask extends ITask {
	userId: string;
}
