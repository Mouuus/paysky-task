import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: string[] = [];
  unsubscribe: Subscription[] = [];
  constructor(private categoryService: CategoriesService) {}
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.unsubscribe.push(
      this.categoryService.getAllCategories().subscribe((response) => {
        this.categories = response;
      })
    );
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
