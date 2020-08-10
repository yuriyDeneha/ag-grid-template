import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {HttpDataService} from '../../services/http-data.service';
import { DatePipe } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { DatePickerEditorComponent } from './ag-grid-components/ag-grid-datepicker/datepicker.component';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsTableComponent implements OnInit {

  @ViewChild('agGridTemplate', {static: false}) agGrid: AgGridAngular;
  selectedDataStringPresentation: any;

  /// contanta for the generation data
  private DATE_TIME_DELTA = 10000000000;

  // price value which is limit between green & red values
  private PRICE_BORDER = 20000;

  public frameworkComponents = { matDatepicker: DatePickerEditorComponent };
  public columnDefs = [
    {
      headerName: 'Car Name',
      field: 'name', sortable: true, filter: true, editable: true
    },
    {headerName: 'Car sales date', field: 'countrycode', sortable: true, filter: true, editable: true,
      valueFormatter: this.dateValueFormatter.bind(this),
      cellEditor: 'matDatepicker'
    },
    {
      headerName: 'Sales price', field: 'population', sortable: true, filter: true, editable: true,
      valueFormatter: this.priceValueFormatter,
      cellClassRules: {
        'green-color': (params) => (params.value > this.PRICE_BORDER),
        'red-color': (params) => (params.value <= this.PRICE_BORDER)
      }
    }
  ];
  public rowData: object[];
  public editType = 'fullRow';
  public defaultColDef = {
    flex: 1,
    minWidth: 250,
    filter: true,
  };

  constructor(
    private http: HttpDataService,
    private datePipe: DatePipe
  ) {}


  public ngOnInit(): void {
    this.getMockedDate();
  }

  private getMockedDate(): void {
    this.http.getAllCityOnLoad()
      .subscribe((response: {data: {cityList: Array<any>}}) => {
        this.rowData = response.data.cityList;
      });
  }


  private priceValueFormatter(params: {value: any}) {
    return '$' + params.value;
  }

  private dateValueFormatter(params: { value: any }) {
    const date = Date.parse(params.value) ?
      new Date(params.value) :
      new Date(new Date().getTime() + this.getRandomArbitrary(- this.DATE_TIME_DELTA, this.DATE_TIME_DELTA));
    return this.datePipe.transform(new Date(date), 'short');
  }

  private getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  public onGridReady(params): void {
    params.api.sizeColumnsToFit();
  }
}
