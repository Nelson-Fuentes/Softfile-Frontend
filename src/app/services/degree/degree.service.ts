import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Degree } from 'src/app/models/degree';

const base_api_url = environment.softfile_api_url + "degree";

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  constructor(
    private httpClient: HttpClient
  ) { }

    public get_all_degrees(){
      return this.httpClient.get<Degree[]>(base_api_url)
    }
  }
