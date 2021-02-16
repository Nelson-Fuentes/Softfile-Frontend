import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from 'src/app/models/email';

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

  public get_emails_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<Email[]>(base_api_url, { headers: headers } );
  }
}
