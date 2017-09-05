import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderList: any;
  oldList: any = [];
  dishName: string;
  dishPrice: number;
  menuCost: number;

  constructor(private data: OrderService) { }

  ngOnInit() {
    this.data.currentOrderList.subscribe(orderList => this.orderList = orderList);
  }

  ngDoCheck () { // Angular is listening all time for changes, if this happens, it update the shopping cart with new values
    if (this.orderList !== this.oldList)
    this.data.currentOrderList.subscribe(orderList => this.orderList = orderList);
    this.oldList = this.orderList;
    this.menuCost = 0;
    for (var order in this.orderList) {
      this.menuCost += this.orderList[order].price * this.orderList[order].quant;
    }
    this.menuCost = Math.round(this.menuCost * 100) / 100;
  }
  remove(order): void { // function to remove items from the shopping cart
    for (var dish in this.orderList) {
      if (order === this.orderList[dish].id){
        this.orderList[dish].quant -= 1
        if (this.orderList[dish].quant == 0){
            console.log(this.orderList.splice(dish,1));
        }
      }
    }
  }
  increment(order): void { // function to add items to the shopping cart (it can be done also from the dishes-details button)
    for (var dish in this.orderList) {
      if (order === this.orderList[dish].id){
        this.orderList[dish].quant += 1
      }
    }
  }
}
