import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  getAllCityOnLoad(): Observable<any> {
    return  this.http.get<any>('https://stacktech.cfapps.io/stacktech/getallCity');
  }
}
