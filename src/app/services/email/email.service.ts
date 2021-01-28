import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_api_url = environment.softfile_api_url + "email";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public validate_email(token: string){
    return this.httpClient.get<{ message: string }>(base_api_url+"/validate/" + token)
  }
}
