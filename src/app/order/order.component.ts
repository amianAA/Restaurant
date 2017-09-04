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

  ngDoCheck () {
    if (this.orderList !== this.oldList)
    this.data.currentOrderList.subscribe(orderList => this.orderList = orderList);
    // console.log(this.orderList, this.orderList.length);
    this.oldList = this.orderList;
    this.menuCost = 0;
    for (var order in this.orderList) {
      this.menuCost += this.orderList[order].price * this.orderList[order].quant;
    }
    this.menuCost = Math.round(this.menuCost * 100) / 100;
  }
  remove(order): void {
    for (var dish in this.orderList) {
      if (order === this.orderList[dish].id){
        this.orderList[dish].quant -= 1
        if (this.orderList[dish].quant == 0){
            console.log(this.orderList.splice(dish,1));
        }
      }
    }
  }
  increment(order): void {
    for (var dish in this.orderList) {
      if (order === this.orderList[dish].id){
        this.orderList[dish].quant += 1
      }
    }
  }
}
