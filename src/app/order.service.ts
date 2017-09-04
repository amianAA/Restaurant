import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {

  public orderList = new BehaviorSubject<any>("");
  currentOrderList = this.orderList.asObservable();

constructor() { }

  addToOrderList(orderList: any) {
    this.orderList.next(orderList);
  }
}
