import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { Profile } from '../../../../models/profile';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public title: string = "Perfil de usuario";
  public profile = new Profile(
    new User('Nelson-Fuentes', 'Nelson Alejandro', 'Fuentes Paredes'),
    'Software Developer'
  );

  constructor(
    private moduleDataService: ModuleDataService
  ) {
    this.moduleDataService.title = this.title;
    this.moduleDataService.action = this.moduleDataService.ACTION_FORM;
    this.profile.description = '                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a debitis perferendis incidunt laboriosam! Non corrupti iusto sed rerum! Unde illum repudiandae quisquam id libero ratione facere iste, suscipit nesciunt?';
  }

  public change_profile(event: any){
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();

      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = (e) =>{
        this.profile.image = reader.result?.toString();
      }

  }  }

  public change_wallpaper(event: any){
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();

      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = (e) =>{
        this.profile.wallpaper = reader.result?.toString();
      }

  }  }

  ngOnInit(): void {
  }
}
