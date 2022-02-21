import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({providedIn: 'root'})
export class PaymentService {
  constructor(private http: HttpClient) {}

  saveFinancialTransaction(personalNumberVal: string, mobileVal: number, amountVal: number, accountNumVal: string, taxVal: number) {
    const url = environment.baseUrl + '/saveFinancialService';
    return this.http.post(url, {
      amount: amountVal,
      mobile: mobileVal,
      commissionTax: taxVal,
      personalNumber: personalNumberVal,
      accNumber: accountNumVal
    });
  }

}
