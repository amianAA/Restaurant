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
  categoriesKnown() { // With this function an array is built with the differents dishes categories
    for (var dish in this.dishes) {
      if(this.dishesCategories.indexOf(this.dishes[dish].category) < 0){
        this.dishesCategories.push(this.dishes[dish].category);
      }
    }
  }
  selectCategory(category) { // A function to pass to the HTML template the selected category
    this.selectedCategory = category;
  }
}
