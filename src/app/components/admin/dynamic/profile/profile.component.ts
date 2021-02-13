import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Degree } from 'src/app/models/degree';
import { City, Country } from 'src/app/models/location';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { LocationService } from 'src/app/services/location/location.service';
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
  public out_action: boolean = true;
  public countries: Country[] = [];
  public cities: City[] = [];
  public form_profile: FormGroup  = this.formBuilder.group({
    firstname: new FormControl('' , [Validators.required]),
    lastname: new FormControl('' , [Validators.required]),
    degree: new FormControl(),
    image: new FormControl(),
    wallpaper: new FormControl(),
    description: new FormControl(),
    country: new FormControl,
    city: new FormControl
  });

  constructor(
    private moduleDataService: ModuleDataService,
    private profileService: ProfileService,
    private toastrService : ToastrService,
    private degreeService: DegreeService,
    private formBuilder: FormBuilder,
    private locationService: LocationService
  ) {
    this.moduleDataService.title = this.title;
    this.moduleDataService.action = this.moduleDataService.ACTION_FORM;
    this.locationService.get_all_countries().subscribe(
      countries => {
        this.countries = countries;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')

      }
    );
    this.degreeService.get_all_degrees().subscribe(
      degree => {
        this.degrees = degree;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error');
      }
    );

    this.profileService.get_profile_auth().subscribe( profile => {
      this.profile.get_data_from(profile);
      if(this.profile.location){
        this.country_selected(this.profile.location?.country);
      }
    }, err => {
      this.toastrService.error(err.error, 'Ocurrio un error');
    } );
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

  public update_profile(){
    this.out_action = false;
    this.profileService.set_profile_auth({
      firstname: this.profile.user.firstname,
      lastname: this.profile.user.lastname,
      description: this.profile.description,
      image: this.profile.image,
      wallpaper: this.profile.wallpaper,
      degree_id: this.profile.degree?._id,
      location: this.profile.location?._id
    }).subscribe(
      profile => {
        this.profile.get_data_from(profile);
        this.toastrService.success('Se han actualizado los datos de tu perfil', 'Proceso exitoso')
      }, err => {
        console.log(err)
        this.toastrService.error(err.error, 'Ocurrio un error')
      }, () => {
        this.out_action = true;
      }
    );
  }

  public get_field(tag: string){
    return this.form_profile.get(tag)
  }


  public country_selected(country?: Country){
    this.cities = [];
    this.locationService.get_country(country?._id +"").subscribe(
      country=> {
        if(country.cities){
          country.cities.forEach(city => {
            city.country = country;
            this.cities.push(city);
          })
        }
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

}
