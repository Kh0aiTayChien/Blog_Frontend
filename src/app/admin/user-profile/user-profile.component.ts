import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formEditUser?: FormGroup;
   users?: any

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.userService.getById().subscribe(res => {
      this.users = res
      console.log(res)
      this.formEditUser = this.fb.group({
        'name': [this.users.name],
        'phone': [this.users.phone],
        'address': [this.users.address],
      })
    })

  }

  editProfile() {
    let data = this.formEditUser?.value;
    console.log(data)
    this.userService.editProfileUser(data).subscribe(res => {
      console.log(res)
      this.toastr.success('Cập nhật thành công!', 'Trạng thái');
    })

  }

}
