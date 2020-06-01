import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {CityModel} from '../../model/city.model';
import {HttpDataService} from '../../service/http-data.service';

@Component({
  selector: 'app-enterprise-edition',
  templateUrl: './enterprise-edition.component.html',
  styleUrls: ['./enterprise-edition.component.css']
})
export class EnterpriseEditionComponent implements OnInit {

  @ViewChild('agGridTemplate', {static: false}) agGrid: AgGridAngular;
  selectedDataStringPresentation: any;
  constructor(private http: HttpDataService) { }

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
    this.http.getAllCityOnLoad().subscribe(response => this.rowData =  response.data.cityList);
    console.warn('rowData=', this.rowData);
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    this.selectedDataStringPresentation = selectedData
      .map(node => '[ ID =' + node.id + '   ' + 'Name =' + node.name + ' ]')
      .join(', ');
    console.log('selectedData==', selectedData);
  }

}
