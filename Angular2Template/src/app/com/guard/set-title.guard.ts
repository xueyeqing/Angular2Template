import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SetTitleGuard implements CanActivate {

  constructor(private titleService: Title) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.titleService.setTitle(next.data['title']);
    return true;
  }
}
