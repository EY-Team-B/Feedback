import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../roles';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router, public roles: Roles) {}
  user: User = new User();

  ngOnInit(): void {}

  onSubmit() {
    if (window.confirm('Continue?')) {
      this.service.save(this.user).subscribe((data) => {
        window.alert(data);
        this.router.navigateByUrl('/view');
      });
    }
  }

  cancel() {
    this.user = new User();
    this.router.navigate(['/view']);
  }
}
