import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users : User[] = [
    new User('adwait' , 'test@test.com', 123456789, 'indore'),
    new User('pankaj' , 'check@test.com', 123486789, 'indore'),
    new User('amit' , 'ensure@test.com', 125556789, 'indore')
  ]

  onDelete(index : number)
  {
    this.users.splice(index , 1);
  }

}
