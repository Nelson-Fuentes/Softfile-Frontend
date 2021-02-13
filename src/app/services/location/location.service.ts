import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/models/location';

const base_api_url = environment.softfile_api_url + "location";
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get_all_countries(){
    return this.httpClient.get<Country[]>(base_api_url+ "/country");
  }

  public get_country(id:string){
    return this.httpClient.get<Country>(base_api_url+ "/country/" + id);
  }
}
