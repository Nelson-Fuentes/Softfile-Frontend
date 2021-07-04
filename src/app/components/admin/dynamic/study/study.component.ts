import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudyCenter, StudyCenterUser } from 'src/app/models/study';
import { StudyService } from 'src/app/services/study/study.service';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  public study_centers: StudyCenter[] = [];
  public study_center_user: StudyCenterUser [] = [];
  public current_page:number = 1;
  public add_study_center: StudyCenter = new StudyCenter('');
  public add_study_center_form: FormGroup;

  constructor(
    private studyService : StudyService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { 
    this.add_study_center_form = this.make_study_form_group();

    // when services are fully implemented, here add subscribe function
    this.study_centers = this.studyService.get_study_centers();
    // when services are fully implemented, here add subscribe function
    this.study_center_user = this.studyService.get_study_center_user();

  }

  public make_study_form_group(){
    return this.formBuilder.group({
      name: new FormControl('', Validators.required)
    });
  }

  public study_center_name_field_is_valid(form: FormGroup):boolean{
    const control = form.get('name');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }

  public add_study_center_fun(){
    // when services are fully implemented, here add subscribe function
    this.studyService.add_study_center(this.add_study_center);
    this.study_centers.push(this.add_study_center);
    this.toastrService.success(undefined, 'Registro exitoso')
    this.add_study_center = new StudyCenter('');
    this.add_study_center_form.reset();

  }

  public delete_study_center(i: number){
    const study_center: StudyCenter = this.study_centers[i];
    if (confirm('¿Estas seguro de eliminar este estudio?')){
      this.study_centers.splice(i,1);
      this.studyService.delete_study_center(study_center);
      this.toastrService.success(undefined, 'El estudio ha sido borrado')

    }
  }

  public validate_study_center(study_center: StudyCenter){
    const name_control: FormControl = new FormControl('', Validators.required);
    name_control.setValue(study_center.name);
    return name_control.valid;
  }

  public update_study_center(study_center: StudyCenter){
    this.studyService.update_study_center(study_center);
    this.toastrService.success(undefined, 'Estudio Actualizado');
    study_center.name = study_center.name;

  }

  ngOnInit(): void {
  }

}
