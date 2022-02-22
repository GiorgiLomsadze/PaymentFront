import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from './Services/UtilityService';

@Component({
  selector: 'app-utility-page', templateUrl: './utility-page.component.html', styleUrls: ['./utility-page.component.css']
})
export class UtilityPageComponent implements OnInit {
  personalNumber: string;
  mobileNumber: number;
  amount: number;
  taxValue: number;

  personalNumberInpStatus = false;
  mobileNumberInpStatus = false;
  amountInpStatus = true;
  showbtn = false;

  constructor(private router: Router, private utilityService: UtilityService) {
    this.taxValue = 0.5;
  }

  ngOnInit() {
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

  amountValidator(val: number): void {
    this.amountInpStatus = 0 < val && val <= 100;
    this.showbtn = this.amountInpStatus;
  }

  goToHomePage() {
    this.router.navigate(['']);
  }


  checkPersonalNumberInpStatus(val: string) {
    this.personalNumberInpStatus = !val || val !== '';
  }

  checkMobileNumberInpStatus(val: number) {
    this.mobileNumberInpStatus = !val || val !== 0;
  }

  validatorSuccess(): boolean {
    return this.personalNumberInpStatus && this.mobileNumberInpStatus;
  }

  saveUtilityTransaction() {
    if (this.validatorSuccess()) {
      this.utilityService.saveUtilityTransaction(this.personalNumber, this.mobileNumber, this.amount, this.taxValue).subscribe(status => {
        console.log('Success');
        this.goToHomePage();
      });
    }
  }
}
