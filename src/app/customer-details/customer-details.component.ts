import { Component, OnInit } from '@angular/core';
import { Customer } from '../datatypes/customer';
import { CustomerService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      if(p['id']) {
        this.customerService.getCustomer(p['id']).subscribe(data => {
          this.customer = data;
        });
      }
    });
  }

}
