import {Component, OnInit, ViewChild} from '@angular/core';
import {CityModel} from '../../model/city.model';
import {AgGridAngular} from 'ag-grid-angular';
import {HttpDataService} from '../../service/http-data.service';

@Component({
  selector: 'app-community-edition',
  templateUrl: './community-edition.component.html',
  styleUrls: ['./community-edition.component.css']
})
export class CommunityEditionComponent implements OnInit {

  @ViewChild('agGridTemplate', {static: false}) agGrid: AgGridAngular;
  selectedDataStringPresentation: any;
  constructor(private http: HttpDataService) { }

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true , checkboxSelection: true},
    {headerName: 'Country Name', field: 'name', sortable: true, filter: true},
    {headerName: 'District', field: 'district', sortable: true, filter: true},
    {headerName: 'Country Code', field: 'countrycode', sortable: true, filter: true},
    {headerName: 'Population', field: 'population', sortable: true, filter: true}
  ];
  rowData: CityModel[];

  ngOnInit(): void {
    this.http.getAllCityOnLoad().subscribe(response => this.rowData =  response.data.cityList);
    console.warn('rowData=', this.rowData);
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    this.selectedDataStringPresentation = selectedData
      .map(node => '[ ID =' + node.id + '   ' + 'Name =' + node.name + ' ]')
      .join(',   ');
    console.log('selectedData==', selectedData);
  }

}
