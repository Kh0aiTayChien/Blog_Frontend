import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../service/post.service";
import {CategoryService} from "../../../service/category.service";
import {en_US, NzI18nService, vi_VN} from "ng-zorro-antd/i18n";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  defaultImage =" https://www.w3schools.com/tags/img_girl.jpg";

  posts: any[] = [];

  category: any[] = [];

  current = 1;

  gridStyle = {
    width: '50%',
    textAlign: 'left'
  };
  first_gridStyle = {
    width: '100%',
    textAlign: 'center'
  };

  constructor(private postService: PostService,
              private cateService: CategoryService,
              private i18n: NzI18nService) {
  }

  ngOnInit(): void {
    this.showPostPublic();
    this.cateService.getAll().subscribe(res => {
      this.category = res;
    })
  }

  showPostPublic() {
    this.postService.showPublic().subscribe(res => {
      console.log(res)
      this.posts = res;
    })
  }

  switchLanguage() {
    this.i18n.setLocale(vi_VN);
  }
}
