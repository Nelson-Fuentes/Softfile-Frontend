import { Degree } from "./degree";
import { User } from "./user";

const PROFILE_IMAGE_DEFAULT = 'user_profile_default.jpeg';
const WALLPAPER_IMAGE_DEFAULT = 'profile_wallpaper.jpg';
const IMG_PATH = '/assets/img/';

export class Profile {
  constructor(
    public user: User,
    public degree?: Degree,
    public image?: string | undefined,
    public wallpaper?: string,
    public description?: string,
    public _id?: string
  ){};

  public get_image(): string{
    if (this.image){
      return this.image;
    }
    return IMG_PATH+ PROFILE_IMAGE_DEFAULT;
  }

  public get_wallpaper(): string{
    if (this.wallpaper){
      return this.wallpaper;
    }
    return IMG_PATH+ WALLPAPER_IMAGE_DEFAULT;
  }

  public get_data_from(data: any){
    this.user = data.user;
    this._id = data._id;
    this.degree = data.degree;
    this.description = data.description;
    this.image = data.image;
    this.wallpaper = data.wallpaper;
  }

}
