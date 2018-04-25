import { Component,  Input, OnInit } from '@angular/core';
import { Customer } from '../datatypes/customer'
import { CustomerService } from '../customer-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input()
  public searchTerm: string = '';
  public customers: Customer[] = [];

  public errorMsg;

  constructor(
    public customerService: CustomerService
  ) { }

  ngOnInit() {
    let dummy = new Customer();
    dummy.name = 'Beispielkunde';
    dummy.customerId = '-';
    this.customers.push (dummy);
    this.reload (this.searchTerm);
  }

  public reload(term: string) {
    this.errorMsg = null;
    this.customers = [];
    this.customerService.queryCustomers(term).subscribe(data => {
  	  console.log(data);
      this.customers = data;
    }, error => {
      this.errorMsg = 'Fehler beim Laden der Kundendaten: ' + error.message;
    });
  }
}
