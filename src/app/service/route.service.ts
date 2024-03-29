import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from './../app-setting.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class RouteService {

  constructor(
    private http: Http,
    public authHttp: AuthHttp
  ) {

  }
  
  get(id) {
    return this.authHttp.get(AppSetting.API + '/routes/' + id)
    .map(response => {
      return response.json();   
    });   
  }
  
  gets() {
    return this.authHttp.get(AppSetting.API + '/routes')
    .map(response => {
      return response.json();    
    });
  }

  update(id, route) {
    return this.authHttp.patch(AppSetting.API + '/routes/' + id, route)
      .map(response => {
          return response.json();
      });
  }

  store(route) {
    return this.authHttp.post(AppSetting.API + '/routes', route)
    .map(response => {
      return response.json();
    });
  }

  delete(id) {
    return this.authHttp.delete(AppSetting.API + '/routes/' + id)
    .map(response => {
      return response.json();
    });
  }
}
