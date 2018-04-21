import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
export class PermissionGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (window.localStorage.getItem('auth')=='1') {
            return true;
        }else{
            return false;
        }
    }
}