import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu:Food[]=[
    {
      id:1,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:2,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:3,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:4,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:5,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:6,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
    {
      id:7,
      name:'pizza',
      descripcion:'Peperoni',
      category:'food',
      image:'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      price:250
    },
  ]
  constructor() { }
  public getAllFoods():Food[]{
    return this.menu;
  }
}
