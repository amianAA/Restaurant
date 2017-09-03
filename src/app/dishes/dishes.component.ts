import { Component, OnInit } from '@angular/core';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  getDishes (): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes)
  }
  ngOnInit(): void {
    this.getDishes();
  }
  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }
}
