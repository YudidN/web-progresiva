import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButton,MatSelectModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent  implements OnInit{
 
 
  form = this.fromBuilder.group({
    name:['',[Validators.required]],
    description:['',[Validators.required,Validators.minLength(20)]],
    image:['',[Validators.required]],
    category:['',[Validators.required]],
    price:['',[Validators.required,Validators.min(2)]]

  })
 
  constructor(private fromBuilder:FormBuilder, public serviceFood:FoodService, public router:Router){}
  
  foodId:number =-1;
  edit:boolean = false;
  activedRoute:ActivatedRoute = inject(ActivatedRoute);
  food?:Food = {
    name:'',
    descripcion:'',
    category:'',
    image:'',
    price:0

  }

  ngOnInit(): void {
    if(this.activedRoute.snapshot.params['id']){
      this.edit = true;
      this.foodId =Number(this.activedRoute.snapshot.params['id']);
      console.log(this.foodId);
      //this.food = this.serviceFood.getOne(this.foodId);

      this.serviceFood.getOneFood(this.foodId).subscribe({
        next:(value) => this.updateForm(value),
        error:(e) => console.error(e),
        complete:() => console.info('complete'),
      })

    }

  }

  public updateForm(food:Food):void{
    if(food){
      this.form.patchValue({
        name:food.name,
        category:food.category,
        description:food.descripcion,
        image:food.image,
        price:food.price.toString()
      })

    }
  }

  public updateData(){
    if(this.form.status == 'VALID'){

      if( this.name?.value && this.description?.value && this.category?.value && this.image?.value && this.price?.value){
        
        let priceNumber =Number(this.price.value)
        let comida:Food={
          id:this.foodId,
          name:this.name?.value,
          descripcion:this.description?.value,
          category:this.category?.value,
          image:this.image?.value,
          price:priceNumber
      }
      
      console.log(comida);
      //this.serviceFood.updateFood(comida);
      this.serviceFood.addFood(comida).subscribe({
        next:(value) => (this.food = value),
        error:(e) => console.error(e),
        complete:() => this.router.navigate(['/food/food-list']),
      })
      }
    }
  }
 public sendData(){
    if(this.form.status == 'VALID'){

      if( this.name?.value && this.description?.value && this.category?.value && this.image?.value && this.price?.value){
        
        let priceNumber =Number(this.price.value)
        let comida:Food={
          name:this.name?.value,
          descripcion:this.description?.value,
          category:this.category?.value,
          image:this.image?.value,
          price:priceNumber
      }
      
      console.log(comida);
      //this.serviceFood.addFood(comida);
      this.serviceFood.addFood(comida).subscribe({
        next:(value) => (this.food = value),
        error:(e) => console.error(e),
        complete:() =>this.router.navigate(['/food/food-list']),
      })
      }
    }
 }
 
 get name(){
  return this.form.get('name');
 }

 get description (){
  return this.form.get('description');
 }

 get image(){
  return this.form.get('image');
 }

 get category(){
  return this.form.get('category');
 }

 get price(){
  return this.form.get('price');
 }

}
