import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  posts: any[] = [];
  category?: any;
  constructor(private categoryService: CategoryService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = this.router.snapshot.paramMap.get('id');
    this.getPostByCate(id);
    this.getCategory(id);
  }

  // @ts-ignore
  getPostByCate(id: any){
    this.categoryService.getPostByCategory(id).subscribe(res => {
      this.posts = res;
      console.log(this.posts)
    })
  }
  getCategory(id: any){
    this.categoryService.getCategoryDetail(id).subscribe(res => {
      this.category = res;
    })
  }
}
