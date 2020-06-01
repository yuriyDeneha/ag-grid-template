import {Component, OnInit} from '@angular/core';
import {CityModel} from '../../../model/city.model';
import {HttpDataService} from '../../../service/http-data.service';

@Component({
  selector: 'app-static-pagination',
  templateUrl: './static-pagination.component.html',
  styleUrls: ['./static-pagination.component.css']
})
export class StaticPaginationComponent implements OnInit {
   gridApi;
   gridColumnApi;
   columnDefs;
   autoGroupColumnDef;
   defaultColDef;
   rowSelection;
   rowGroupPanelShow;
   pivotPanelShow;
   paginationPageSize: number;
   cacheBlockSize: number;
   rowData: CityModel[];

  ngOnInit(): void {
  }

  constructor(private http: HttpDataService) {
    this.paginationPageSize = 10;
    this.cacheBlockSize = 10;

    this.columnDefs = [
      {
        field: 'id',
        minWidth: 170,
        checkboxSelection: (params) => {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: (params) => {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
      },
      { headerName: 'City Name', field: 'name'},
      { headerName: 'Country Code', field: 'countrycode'},
      {field: 'district'},
      {field: 'population'}
    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 170,
      field: 'district',
      valueGetter: (params) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {checkbox: true},
    };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.getAllCityOnLoad()
      .subscribe(response => {
        this.rowData = response.data.cityList;
        console.log(this.rowData);
      });
  }


}
