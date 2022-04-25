import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { Roles } from '../roles';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  email: string = '';
  constructor(
    private service: UserServiceService,
    private router: Router,
    private dataService: DataTransferService,
    public roles: Roles
  ) {}

  ngOnInit(): void {
    this.user = this.dataService.getData();
    this.email = this.user.email;
  }

  onSubmit() {
    if (window.confirm('Continue?')) {
      this.service.update(this.email, this.user).subscribe((data) => {
        window.alert(data);
        this.dataService.clearData();
        this.user = new User();
        this.router.navigate(['/view']);
      });
    }
  }

  cancel() {
    this.dataService.clearData();
    this.user = new User();
    this.router.navigate(['/view']);
  }
}
