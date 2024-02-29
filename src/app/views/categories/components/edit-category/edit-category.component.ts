import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../categories-service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm: any = FormGroup;
  CategoryDetails:any
  CategoryId:any
  constructor(private route:ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.CategoryId = params ['categoryId'];
    });
    this.editCategoryForm = new FormGroup ({
      name: new FormControl('', Validators.required)

    });
    this.fetchCategoryDetails()
  }

  fetchCategoryDetails(){
      this.CategoryDetails = this.categoryService.getCategoryById(JSON.parse(this.CategoryId));
      this.fillInputs()
    }

    fillInputs(){
      this.editCategoryForm.get('name').setValue(this.CategoryDetails.name);
    }

    onSubmit() {
    if (this.editCategoryForm.valid) {
      try {
        let payload ={
          id:JSON.parse(this.CategoryId),
          name:this.editCategoryForm.value.name,
        }

        this.categoryService.updateCategory(payload);
        this.editCategoryForm.reset();
        window.alert('Category edited. click ok to see all Categories.');
        this.router.navigateByUrl('categories/all-categories');
      }
      catch (error:any) {
        console.error('error editing Category:', error);
        window.alert('failed to edit Category. please try again.');
      }
    }
  }

}
