import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

const base_api_url = environment.softfile_api_url + "user";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public add_user(user: User){
    return this.httpClient.post<User>(base_api_url, user);
  };
}
