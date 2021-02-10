import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';

const base_api_url = environment.softfile_api_url + "profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(
    private httpClient: HttpClient
  ) { }

  public get_profile_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<Profile>(base_api_url+'', { headers: headers });
  }

  public set_profile_auth(profile: any){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.put<Profile>(base_api_url+'', profile , { headers: headers });
  }
}
