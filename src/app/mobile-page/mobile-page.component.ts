import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MobileService} from './Services/MobileService';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.css']
})
export class MobilePageComponent implements OnInit {

  mobileNumber: number;
  amount: number;
  taxValue: number;

  mobileNumberInpStatus = false;
  amountInpStatus = true;
  showbtn = false;

  constructor(private router: Router, private mobileService: MobileService) {
    this.taxValue = 0.5;
  }

  ngOnInit() {
  }

  calculateTax(updateValue: number): void {
    this.amountValidator(updateValue);
    // tslint:disable-next-line:triple-equals
    if ( updateValue == 0 ) {
      this.taxValue = 0;
    } else if ((updateValue * 0.01) > 0.5 ) {
      this.taxValue = updateValue * 0.01;
    } else {
      this.taxValue = 0.5;
    }

  }

  amountValidator(val: number): void {
    this.amountInpStatus = 0 < val && val <= 100;
    this.showbtn = this.amountInpStatus;
  }

  checkMobileNumberInpStatus(val: number) {
    this.mobileNumberInpStatus = !val || val !== 0;
  }

  validatorSuccess(): boolean {
    return this.mobileNumberInpStatus;
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  saveMobileTransaction() {
    if (this.validatorSuccess()) {
      this.mobileService.saveMobileTransaction(
        this.mobileNumber,
        this.amount,
        this.taxValue
      ).subscribe(status => {
        console.log('Success');
        this.goToHomePage();
      });
    }
  }
}
