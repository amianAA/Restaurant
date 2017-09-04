import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

import { Dish } from '../dish';
import { DISHES } from '../data-dishes';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit  {

  @Input() public dish: Dish;

  orderList: any;
  order = [];

  constructor(private data: OrderService) { }

  ngOnInit () {
    this.data.currentOrderList.subscribe(orderList => this.orderList = orderList);
  }
  addDishToOrder() {
    function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
      }
    }
    function totalDishPrice(price, quant) {
          return price*quant;
        }
    if (search(this.dish.name, this.orderList) === undefined){
      this.order.push({
        id: this.dish.id,
        name: this.dish.name,
        price: this.dish.price,
        quant: 1
        });
    }
    else {
      var i = search(this.dish.name, this.orderList);
      this.orderList[i].quant += 1;
    }
    this.orderList = this.order;
    this.data.currentOrderList.subscribe(orderList => this.orderList = this.order);
    this.data.addToOrderList(this.order);
  }
}
