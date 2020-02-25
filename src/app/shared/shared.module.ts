import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NullableTableRowComponent } from './components/nullable-table-row/nullable-table-row.component';

@NgModule({
	declarations: [
		InformationModalComponent,
		ErrorMessageComponent,
		NullableTableRowComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		InformationModalComponent,
		NullableTableRowComponent
	]
})
export class SharedModule { }
