import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CounterDetailsComponent } from './counter-details/counter-details.component';
import { CustomerService } from './customer-service.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'detail/:id', component: CustomerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Catch-all-route für alle undefinierten Pfadangaben
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CounterDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
