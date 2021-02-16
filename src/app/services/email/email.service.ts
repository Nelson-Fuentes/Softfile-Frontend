import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from 'src/app/models/email';
import { Location }  from '@angular/common';


const base_api_url = environment.softfile_api_url + "email";
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private redirectTo:string = '';

  constructor(
    private httpClient: HttpClient,
    private location: Location,
  ) {
    this.redirectTo = window.location.href.replace(this.location.path(), '') + "/sign/confirm";
  }

  public validate_email(token: string){
    return this.httpClient.get<{ message: string }>(base_api_url+"/validate/" + token)
  }

  public get_emails_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<Email[]>(base_api_url, { headers: headers } );
  }

  public add_email_auth(adress: string){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.post<Email>(base_api_url, { adress, redirectTo: this.redirectTo } , { headers: headers } );
  }

  public delete_email_auth(id: string){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.delete<Email>(base_api_url +'/'+id,  { headers: headers } );
  }

  public update_email_auth(id: string, adress: string){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.put<Email>(base_api_url +'/'+id, { adress, redirectTo: this.redirectTo },{ headers: headers } );

  }
}
