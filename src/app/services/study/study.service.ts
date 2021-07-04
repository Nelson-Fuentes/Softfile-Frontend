import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudyCenter, StudyCenterUser } from 'src/app/models/study';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // this arr will be fill with test data until services is implemented
  test_study_center: StudyCenter [] = [{name: 'study center1', _id: 'first_id'}, {name: 'study center2', _id: 'second_id'}]
  test_study_center_user: StudyCenterUser [] = [{study_center: this.test_study_center[0]}, {study_center: this.test_study_center[1]}]
  public get_study_centers(){
    return this.test_study_center;
  }

  public get_study_center_user(){
    return this.test_study_center_user;
  }
  
  public add_study_center(study_center: StudyCenter){
    this.test_study_center.push(study_center);
    console.log("added!");
  }

  public delete_study_center(study_center: StudyCenter){
    this.test_study_center = this.test_study_center.filter(item=>item._id != study_center._id);
    console.log("deleted!");
  }

  // now it works as a GET method
  public update_study_center(study_center: StudyCenter){
    console.log("updated!");
    return this.test_study_center;
  }

}

