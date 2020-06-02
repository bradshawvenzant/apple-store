import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

    constructor() { }

    setItem(key: string, value: string): void {
        sessionStorage.setItem(key, value.toString());
    }

    getItem(key: string): string {
        return sessionStorage.getItem(key);
    }

    clearSessionStorage(): void {
        sessionStorage.clear();
    }

}