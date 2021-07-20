import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudyCenter} from 'src/app/models/study';

const base_api_url = environment.softfile_api_url + "studycenter/";

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get_study_centers_default(){
    return this.httpClient.get<StudyCenter[]>(base_api_url+'default');
  }

  public get_study_centers_auth(){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.get<StudyCenter[]>(base_api_url, { headers: headers })
  }

  public create_study_center_auth(study_center:StudyCenter){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.post<StudyCenter>(base_api_url, {

      name: study_center.name
    } ,{ headers: headers })
  }

  public delete_study_center_auth(study_center:StudyCenter){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.delete<StudyCenter>(base_api_url + study_center._id, { headers: headers })
  }

  public update_study_center_auth(study_center:StudyCenter){
    const token = localStorage.getItem(environment.token_authentication_key);
    const headers = new HttpHeaders().set('Authorization', 'token ' + token );
    return this.httpClient.put<StudyCenter>(base_api_url + study_center._id, {
      name: study_center.name
    } ,{ headers: headers })
  }


}

