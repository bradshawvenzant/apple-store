import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ShippingDates } from '../model/shipping-dates';
import { SessionStorageService } from './session-storage.service';

const httpRequestOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    })
};

@Injectable({
    providedIn: 'root'
})
export class MainService {

    private API_BASE = environment.boaltApiBaseUrl;

    constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

    getShippingDate(): Observable<ShippingDates> {
        // CORS issues...
        // return this.http.get<ShippingDates>(this.API_BASE + '/shipping-dates', httpRequestOptions);

        return of(new ShippingDates('06-10-2020', '06-10-2020', '06-10-2020'))
            .pipe(
                delay(300)
            );
    }

    getCurrentToken(): string {
        return this.sessionStorageService.getItem('authenticationToken');
    }

}