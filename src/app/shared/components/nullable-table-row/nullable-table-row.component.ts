import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-nullable-table-row',
	templateUrl: './nullable-table-row.component.html',
	styleUrls: ['./nullable-table-row.component.scss']
})
export class NullableTableRowComponent implements OnInit {

	@Input()
	inputData: any;

	constructor() { }

	ngOnInit(): void {
		console.log(this.inputData);
	}

}
