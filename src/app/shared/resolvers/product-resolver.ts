import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShippingDates } from '../model/shipping-dates';
import { MainService } from '../services/main.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<ShippingDates> {
    constructor(private mainService: MainService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShippingDates> {
        return this.mainService.getShippingDate();
    }
}
