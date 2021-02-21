import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socialnet, SocialnetUser } from 'src/app/models/socialnet';

const base_api_url = environment.softfile_api_url + "socialnet/";

@Injectable({
  providedIn: 'root'
})
export class SocialnetService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get_socialnets_default(){
    return this.httpClient.get<Socialnet[]>(base_api_url+'default');
  }

  public get_socialnets_user_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<SocialnetUser[]>(base_api_url, { headers: headers })
  }

  public create_socialnet_user_auth(socialnet_user:SocialnetUser){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.post<SocialnetUser>(base_api_url, {
      link: socialnet_user.link,
      socialnet_id: socialnet_user.socialnet._id
    } ,{ headers: headers })
  }

  public delete_socialnet_user_auth(socialnet_user:SocialnetUser){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.delete<SocialnetUser>(base_api_url + socialnet_user._id, { headers: headers })
  }

  public update_socialnet_user_auth(socialnet_user:SocialnetUser){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.put<SocialnetUser>(base_api_url + socialnet_user._id, {
      link: socialnet_user.link,
      socialnet_id: socialnet_user.socialnet._id
    } ,{ headers: headers })
  }


}
