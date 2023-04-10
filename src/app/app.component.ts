import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TempDemo';

  users = [
    { id: 1, name: 'Jhon', isActive: true },
    { id: 2, name: 'Wick', isActive: true },
    { id: 3, name: 'Mike', isActive: true },
  ];

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  ngOnInit(): void {
    // this.users$.subscribe((users) => {
    //   console.log('users', users);
    // });
  }
}
