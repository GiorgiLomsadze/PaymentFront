import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MobilePageComponent } from './mobile-page/mobile-page.component';
import { CharityPageComponent } from './charity-page/charity-page.component';
import { UtilityPageComponent } from './utility-page/utility-page.component';
import { FinancialPageComponent } from './financial-page/financial-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtilityService} from './utility-page/Services/UtilityService';
import {NumbersOnlyDirective} from './Validators/numbers-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MobilePageComponent,
    CharityPageComponent,
    UtilityPageComponent,
    FinancialPageComponent,
    NumbersOnlyDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
