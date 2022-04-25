import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private router: Router,
    private service: UserServiceService,
    private dataService: DataTransferService
  ) {}

  createUser() {
    this.router.navigateByUrl('/create-user');
  }

  updateUser(user: User) {
    this.dataService.setData(user);
    this.router.navigateByUrl('/update-user');
  }

  deleteUser(email: string) {
    if (window.confirm(`Delete ${email}?`)) {
      this.service.delete(email).subscribe((data) => {
        window.alert(data);
        location.reload();
      });
    }
  }

  async ngOnInit() {
    await new Promise(() =>
      this.service.findAll().subscribe((data) => (this.users = data))
    );
  }
}
