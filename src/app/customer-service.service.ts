import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './datatypes/customer';

@Injectable()
export class CustomerService {

  private _api = 'http://localhost:9090/backend';

  constructor(
    private http: HttpClient
  ) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._api + 'customers');
  }

  public queryCustomers(searchTerm: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._api + '/search?name=' + searchTerm);
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this._api + '/customers/' + id);
  }
}
