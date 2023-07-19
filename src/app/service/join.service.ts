import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

export interface User {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor() {}

  saveRegistrationData(data: User): void {
    localStorage.setItem('registrationData', JSON.stringify(data));
  }

  getRegistrationData(): User | null {
    const data = localStorage.getItem('registrationData');
    return data ? JSON.parse(data) : null;
  }

  /* getItem : retrieve data from local storage */
  /*getItem(key: string): any {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error('Error parsing item from local storage with key ${key}');
      }
    }
    return null;
  }*/

  /* setItem : store data in the local storage */
  /*setItem(key: string, value: any): void {
    try {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    } catch (error) {
      console.error('Error setting item in local Storage with key ${key}')
    }
  }

  saveRegistrationData(data: any): void {
    const registrationData = this.getItem('registrationData') || [];
    registrationData.push(data);
    this.setItem('registrationData', registrationData);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  getLocalStorageData(): any {
    const data = localStorage.getItem('registrationData');
    return data ? JSON.parse(data) : null;
  }*/

}
