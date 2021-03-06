import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAgGridFrameworkComponent } from './ag-grid-framework.interface';

@Component({
  selector: 'app-datepicker-cell',
  templateUrl: './datepicker.component.html',
})
export class DatePickerEditorComponent implements IAgGridFrameworkComponent {
  @ViewChild('i', { static: false })
  textInput: ElementRef;

  private params: { value: string };
  public date: FormControl;

  // initialization method called by ag-grid to setup component
  agInit(params: { value: string }): void {
    this.params = params;
    this.date = new FormControl(params.value);
  }

  // return final value
  getValue(): Date {
    return this.date.value;
  }
}
