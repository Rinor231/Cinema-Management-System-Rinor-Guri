import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';



@NgModule({
  declarations: [
    CategoriesComponent,
    AllCategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
