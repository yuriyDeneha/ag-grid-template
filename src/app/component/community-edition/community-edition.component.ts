import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cityList, CityModel} from '../../model/city.model';
import {AgGridAngular} from 'ag-grid-angular';

@Component({
  selector: 'app-community-edition',
  templateUrl: './community-edition.component.html',
  styleUrls: ['./community-edition.component.css']
})
export class CommunityEditionComponent implements OnInit {

  @ViewChild('agGridTemplate', {static: false}) agGrid: AgGridAngular;

  constructor(private http: HttpClient) { }

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true , checkboxSelection: true},
    {headerName: 'Country Name', field: 'name', sortable: true, filter: true},
    {headerName: 'District', field: 'district', sortable: true, filter: true},
    {headerName: 'Country Code', field: 'countrycode', sortable: true, filter: true},
    {headerName: 'Population', field: 'population', sortable: true, filter: true}
  ];
  rowData: CityModel[];

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
