import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Socialnet, SocialnetUser } from 'src/app/models/socialnet';
import { SocialnetService } from 'src/app/services/socialnet/socialnet.service';

@Component({
  selector: 'app-socialnet',
  templateUrl: './socialnet.component.html',
  styleUrls: ['./socialnet.component.css']
})
export class SocialnetComponent implements OnInit {

  public socialnets_default:Socialnet[] = []
  public socialnets_user:SocialnetUser[] = [];
  public current_page: number = 1;
  public socialnet_user_form: FormGroup = this.make_socialnet_user_form_group();
  public socialnet_user_object:SocialnetUser = new SocialnetUser('', new Socialnet('', ''));

  constructor(
    private socialnetService: SocialnetService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.socialnetService.get_socialnets_default().subscribe(
      socialnets => {
        this.socialnets_default = socialnets;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
    this.socialnetService.get_socialnets_user_auth().subscribe(
      socialnet_user => {
        this.socialnets_user = socialnet_user;
      }, err =>{
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

  public socialnet_user_link_field_is_valid(form: FormGroup):boolean{
    const control =  form.get('link');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }

  public socialnet_field_is_valid(form: FormGroup):boolean{
    const control =  form.get('socialnet');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }

  public make_socialnet_user_form_group(){
    return this.formBuilder.group({
      socialnet: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required)
    });
  }


  public compare_social(social1: Socialnet, social2: Socialnet){
    if (social1 && social2)
      return social1._id == social2._id;
    return false;
  }

  public create_socialnet_user(socialnet_user:SocialnetUser){
    this.socialnetService.create_socialnet_user_auth(socialnet_user).subscribe(
      new_socialnet_user =>{
        this.socialnets_user.push(new_socialnet_user);
        this.toastrService.success(undefined, 'Registro exitoso');
        this.socialnet_user_object = new SocialnetUser('', new Socialnet('', ''));
        this.socialnet_user_form.reset();
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un erro');
      }
    );
  }

  public delete_socialnet_user(i:number){
    if (confirm('¿Esta seguro de querer eliminar esta red social?')){
      const socialnet_user: SocialnetUser = this.socialnets_user[i];
      this.socialnetService.delete_socialnet_user_auth(socialnet_user).subscribe(
        socialnet_user_deleted => {
          this.socialnets_user.splice(i, 1);
          this.toastrService.success(undefined, 'Eliminación exitosa')
        }, err => {
          this.toastrService.error(err.error, 'Ocurrio un error');
        }
      );
    }
  }

  public update_socialnet_user(socialnet_user:SocialnetUser){
    this.socialnetService.update_socialnet_user_auth(socialnet_user).subscribe(
      socialnet_user_updated => {
        socialnet_user._id = socialnet_user_updated._id;
        socialnet_user.link = socialnet_user_updated.link;
        socialnet_user.socialnet = socialnet_user_updated.socialnet;
        socialnet_user.user = socialnet_user_updated.user;
        this.toastrService.success(undefined, 'Actualización exitosa');
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );;
  }

  ngOnInit(): void {
  }

}
