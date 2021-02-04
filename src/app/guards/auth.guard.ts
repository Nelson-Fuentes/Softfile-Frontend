import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
    ){

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.verify().subscribe( response => {
        this.toastrService.success('Bienvenido' );
        return true;
      }, err => {
        console.log(err);
        this.toastrService.error(err.error.message, 'Ocurrio un error');
        this.router.navigate([ '/sign/in' ]);
        return false;
      } );
    return true;
  }

}
