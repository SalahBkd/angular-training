import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];
  username = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getUsers(username) {
    this.username = username;
    this.usersService.getSingleUser(this.username)
      .subscribe(users => this.users = users, error => console.log(error));
  }

  getAllUsers() {
    this.usersService.getAllUsers()
      .subscribe(users => this.users = users, error => console.log(error));
  }

}
