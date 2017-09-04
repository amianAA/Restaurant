import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './data-dishes';

// @Injectable()
export class DishService {
 getDishes(): Promise<Dish[]>{
   return Promise.resolve(DISHES);
 }
}

