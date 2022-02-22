import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MobilePageComponent} from './mobile-page/mobile-page.component';
import {CharityPageComponent} from './charity-page/charity-page.component';
import {UtilityPageComponent} from './utility-page/utility-page.component';
import {FinancialPageComponent} from './financial-page/financial-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'MobilePayment', component: MobilePageComponent},
  {path: 'CharityPayment', component: CharityPageComponent},
  {path: 'UtilityPayment', component: UtilityPageComponent},
  {path: 'FinancialPayment', component: FinancialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
