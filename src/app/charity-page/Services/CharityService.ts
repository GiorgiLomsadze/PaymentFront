import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({providedIn: 'root'})
export class CharityService {

  constructor(private http: HttpClient) {}

  saveCharityTransaction(personalNumberVal: string, mobileVal: number, amountVal: number,  taxVal: number) {
    const url = environment.baseUrl + '/saveCharityService';
    return this.http.post(url, {
      amount: amountVal,
      mobile: mobileVal,
      commissionTax: taxVal,
      personalNumber: personalNumberVal
    });
  }
}
