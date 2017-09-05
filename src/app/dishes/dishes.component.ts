import { Component, OnInit } from '@angular/core';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;
  dishesCategories = [];
  selectedCategory;

  constructor (private dishService: DishService) {
    this.getDishes()
  }

  getDishes (): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
    this.categoriesKnown();
  }
  ngOnInit(): void {
    this.getDishes();
  }
  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }
  categoriesKnown() { // Con esta función se construye un array con las categorías de los platos
    for (var dish in this.dishes) {
      if(this.dishesCategories.indexOf(this.dishes[dish].category) < 0){
        this.dishesCategories.push(this.dishes[dish].category);
      }
    }
  }
  selectCategory(category) {
    this.selectedCategory = category;
  }
}
