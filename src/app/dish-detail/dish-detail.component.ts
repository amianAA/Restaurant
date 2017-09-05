import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

// Import the Dish class and DISHES data objects array
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
    // share dishes data between this component and order.component
    this.data.currentOrderList.subscribe(orderList => this.orderList = orderList);
  }
  // given the dish name and the dishes array, this function returns on click to the HTML template the index of the dish to add to the shopping cart.
  addDishToOrder() {
    function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
      }
    }
    // return the total amount of one dish kind
    function totalDishPrice(price, quant) {
          return price*quant;
        }
    // loop to know if one dish DOES NOT exists in the order, in this case, the function adds it.
    if (search(this.dish.name, this.orderList) === undefined){
      this.order.push({
        id: this.dish.id,
        name: this.dish.name,
        price: this.dish.price,
        quant: 1
        });
    }
    else { // If exists, just increment the quantity
      var i = search(this.dish.name, this.orderList);
      this.orderList[i].quant += 1;
    }
    this.orderList = this.order;
    this.data.currentOrderList.subscribe(orderList => this.orderList = this.order);
    this.data.addToOrderList(this.order);
  }
}
