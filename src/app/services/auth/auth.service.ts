import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_api_url = environment.softfile_api_url + "auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public authentication(username: string, password: string){
    return this.httpClient.post<{ token:string }>(base_api_url, { username, password });
  }

  public request_reset_password(email: string, redirectTo: string){
    return this.httpClient.post<{ message: string }>(base_api_url+"/reset", { email, redirectTo });
  }

  public reset_password(token:string, password: string){
    return this.httpClient.put<{ message: string}>(base_api_url+ "/password/" + token, { password })
  }

  public verify(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get(base_api_url+'/verify', { headers: headers })
  }
}
