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
  public reader:FileReader = new FileReader();
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
