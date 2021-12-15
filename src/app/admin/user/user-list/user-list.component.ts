import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../service/admin.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAll().subscribe(res => {
      console.log(res);
      this.users = res.data;
    });
  }

  deleteUser(id: any) {
    this.adminService.delete(id).subscribe(res => {
      this.getAllUsers();
      // this.notification
      //   .blank(
      //     'Xoá người dùng thành công',
      //     'Vui lòng chờ hoặc bấm vào biểu tượng x để đóng hộp thông báo',
      //     {
      //       nzStyle: {
      //         color: 'green'
      //       }
      //     }
      //   )
      //   .onClick.subscribe(() => {
      //   console.log('notification clicked!');
    });
  }
}
