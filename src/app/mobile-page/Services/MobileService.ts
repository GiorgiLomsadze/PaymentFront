import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';



@Injectable({providedIn: 'root'})
export class MobileService {
  constructor(private http: HttpClient) {}

  saveMobileTransaction( mobileVal: number, amountVal: number,  taxVal: number) {
    const url = environment.baseUrl + '/saveMobileService';
    return this.http.post(url, {
      amount: amountVal,
      mobile: mobileVal,
      commissionTax: taxVal
    });
  }
}
