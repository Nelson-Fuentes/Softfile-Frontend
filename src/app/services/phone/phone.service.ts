import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhoneCode, PhoneNumber } from 'src/app/models/phone';

const base_api_url = environment.softfile_api_url + "phone/";


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get_phone_codes(){
    return this.httpClient.get<PhoneCode[]>(base_api_url+'codes')
  }

  public get_phone_number_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<PhoneNumber[]>(base_api_url, { headers: headers } );
  }
}
