import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CharityService} from './Services/CharityService';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-charity-page',
  templateUrl: './charity-page.component.html',
  styleUrls: ['./charity-page.component.css']
})
export class CharityPageComponent implements OnInit {

  personalNumber: string;
  mobileNumber: number;
  amount: number ;
  taxValue: number;

  personalNumberInpStatus = false;
  mobileNumberInpStatus = false;
  amountInpStatus = true;
  showbtn = false;
  constructor(private router: Router, private charityService: CharityService) {
    this.taxValue = 0.5;
  }

  ngOnInit() {
  }
  goToHomePage() {
    this.router.navigate(['']);
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

  checkPersonalNumberInpStatus(val: string) {
    this.personalNumberInpStatus = !val || val !== '';
  }

  checkMobileNumberInpStatus(val: number) {
    this.mobileNumberInpStatus = !val || val !== 0;
    console.log(this.amountInpStatus);
  }

  validatorSuccess(): boolean {
    return this.personalNumberInpStatus && this.mobileNumberInpStatus;
  }


  saveCharityTransaction() {
    if (this.validatorSuccess()) {
      this.charityService.saveCharityTransaction(
        this.personalNumber,
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
