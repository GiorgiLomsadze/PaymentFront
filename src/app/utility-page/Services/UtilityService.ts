import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UtilityService {
  constructor(private http: HttpClient) {}

  saveUtilityTransaction(personalNumberVal: string, mobileVal: number, amountVal: number,  taxVal: number) {
    const url = environment.baseUrl + '/saveUtilitiesService';
    return this.http.post(url, {
      amount: amountVal,
      mobile: mobileVal,
      commissionTax: taxVal,
      personalNumber: personalNumberVal
    });
  }
}
