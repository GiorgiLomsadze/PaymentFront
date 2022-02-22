import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentService} from './Services/PaymentService';

@Component({
  selector: 'app-financial-page',
  templateUrl: './financial-page.component.html',
  styleUrls: ['./financial-page.component.css']
})
export class FinancialPageComponent implements OnInit {

  personalNumber: string;
  mobileNumber: number;
  accountNUmber: string;
  amount: number;
  taxValue: number;


  personalNumberInpStatus = false;
  mobileNumberInpStatus = false;
  accountNumberInpStatus = false;
  amountInpStatus = true;
  showbtn = false;

  constructor(private router: Router, private paymentService: PaymentService) {
    this.taxValue = 0.5;
  }

  ngOnInit() {
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  amountValidator(val: number): void {
    this.amountInpStatus = 0 < val && val <= 100;
    this.showbtn = this.amountInpStatus;
  }


  calculateTax(updateValue: number): void {
    this.amountValidator(updateValue);
    // tslint:disable-next-line:triple-equals
    if (updateValue == 0) {
      this.taxValue = 0;
    } else if ((updateValue * 0.01) > 0.5) {
      this.taxValue = updateValue * 0.01;
    } else {
      this.taxValue = 0.5;
    }
  }

  checkPersonalNumberInpStatus(val: string) {
    this.personalNumberInpStatus = !val || val !== '';
  }

  checkMobileNumberInpStatus(val: number) {
    this.mobileNumberInpStatus = !val || val !== 0;
  }

  checkAccountNumberInpStatus(val: string) {
    this.accountNumberInpStatus = !val || val !== '';
  }

  validatorSuccess(): boolean {
    return this.personalNumberInpStatus && this.mobileNumberInpStatus && this.accountNumberInpStatus;
  }

  saveFinancialTransaction() {
    if (this.validatorSuccess()) {
      this.paymentService.saveFinancialTransaction(
        this.personalNumber,
        this.mobileNumber,
        this.amount,
        this.accountNUmber,
        this.taxValue
      ).subscribe(status => {
        console.log('Success');
        this.goToHomePage();
      });
    }
  }
}
