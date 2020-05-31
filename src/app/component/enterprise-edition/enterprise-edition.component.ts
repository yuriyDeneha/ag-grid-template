import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {HttpClient} from '@angular/common/http';
import {cityList, CityModel} from '../../model/city.model';

@Component({
  selector: 'app-enterprise-edition',
  templateUrl: './enterprise-edition.component.html',
  styleUrls: ['./enterprise-edition.component.css']
})
export class EnterpriseEditionComponent implements OnInit {

  @ViewChild('agGridTemplate', {static: false}) agGrid: AgGridAngular;

  constructor(private http: HttpClient) { }

  columnDefs = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Country Name', field: 'name'},
    {headerName: 'District', field: 'district', rowGroup: true},
    {headerName: 'Population', field: 'population'}
  ];
  rowData: CityModel[];

  autoGroupColumnDef = {
    headerName: 'Country Code',
    field: 'countrycode',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  ngOnInit(): void {
    // this.http.get<any>('http://localhost:8085/stacktech/getallCity')
    //   .subscribe(response => this.rowData =  response.data.cityList
    //   );
    // console.warn('rowData=', this.rowData);
    this.rowData = cityList;
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.id + '   ' + node.name)
      .join(', ');
    alert(`Selected Values:: ${selectedDataStringPresentation}`);
  }

}
