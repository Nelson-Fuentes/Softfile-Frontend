import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Profile } from '../../../../models/profile';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public title: string = "Perfil de usuario";
  public reader: FileReader = new FileReader();
  public profile: Profile = new Profile( new User('', '', '') );
  public degrees: Degree[] = [];

  constructor(
    private moduleDataService: ModuleDataService,
    private profileService: ProfileService,
    private toastrService : ToastrService,
    private degreeService: DegreeService
  ) {
    this.moduleDataService.title = this.title;
    this.moduleDataService.action = this.moduleDataService.ACTION_FORM;
    this.profileService.get_profile_auth().subscribe( profile => {
      this.profile.user = profile.user;
      this.profile._id = profile._id;
      this.profile.degree = profile.degree;
      this.profile.description = profile.description;
      this.profile.image = profile.image;
      this.profile.wallpaper = profile.wallpaper;
    }, err => {
      this.toastrService.error(err.error, 'Ocurrio un error');
    } );
    this.degreeService.get_all_degrees().subscribe(
      degree => {
        this.degrees = degree;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error');
      }
    );
  }

  public change_profile(event: any){
    const image_profile = document.getElementById('profile_image');
    this.change_image(event, (e:any) => {
      this.profile.image = this.reader.result?.toString() + ''
      image_profile?.setAttribute('src', this.profile.image);

    })
  }

  public change_wallpaper(event: any){
    const wallpaper_image = document.getElementById('profile_wallpaper');
    this.change_image(event, (e: any)=> {
      this.profile.wallpaper = this.reader.result + '';
      if (wallpaper_image ){
        wallpaper_image.style.backgroundImage = "url('"+ this.profile.wallpaper +"')";
      }
    })
  }

  public change_image(event: any, trigger: any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.reader.readAsDataURL(file);
      this.reader.onload = trigger;
    }
  }

  ngOnInit(): void {
  }
}
