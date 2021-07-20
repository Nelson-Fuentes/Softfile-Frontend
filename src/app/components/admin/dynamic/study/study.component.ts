import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudyCenter} from 'src/app/models/study';
import { StudyService } from 'src/app/services/study/study.service';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  public study_centers: StudyCenter[] = [];
  public current_page:number = 1;
  public add_study_center: StudyCenter = new StudyCenter('');
  public add_study_center_form: FormGroup;

  constructor(
    private studyService : StudyService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { 
    this.add_study_center_form = this.make_study_form_group();

    this.studyService.get_study_centers_auth().subscribe(
      study_centers => {
        this.study_centers = study_centers;
      }, err =>{
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
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
    this.studyService.create_study_center_auth(this.add_study_center).subscribe(
      new_study_center => {
        this.study_centers.push(new_study_center);
        this.toastrService.success(undefined, 'Registro exitoso')
        this.add_study_center = new StudyCenter('');
        this.add_study_center_form.reset();
      }, err =>{
        this.toastrService.error(err.error, 'Ocurrio un error');
      }
    );
  }

  public delete_study_center(i: number){
    
    if (confirm('¿Estas seguro de eliminar este estudio?')){
      const study_center: StudyCenter = this.study_centers[i];
      this.studyService.delete_study_center_auth(study_center).subscribe(
        study_center_deleted => {
          this.study_centers.splice(i,1);
          this.toastrService.success(undefined, 'El estudio ha sido borrado')
        }, err =>{
          this.toastrService.error(err.error, 'Ocurrio un error');
        }
      );
    }
  }

  public validate_study_center(study_center: StudyCenter){
    const name_control: FormControl = new FormControl('', Validators.required);
    name_control.setValue(study_center.name);
    return name_control.valid;
  }

  public update_study_center(study_center: StudyCenter){
    this.studyService.update_study_center_auth(study_center).subscribe(
      study_center_updated => {
        study_center._id = study_center_updated._id;
        study_center.name = study_center_updated.name;
        study_center.user = study_center_updated.user;
        this.toastrService.success(undefined, 'Estudio Actualizado');
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

  ngOnInit(): void {
  }

}
