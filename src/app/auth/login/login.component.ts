import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppCommonModule } from '../../app.common.module';
import { HttpService } from '../../services/http.service';
import { filter, map, take } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [AppCommonModule, MatButtonModule, MatCardModule, MatGridListModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  http = inject(HttpService);

  userCount$ = this.http.getUserCount();

  todo$ = this.http.getTodo().pipe(map(user => user[0]), take(1));

  users$ = this.http.getUsers();

}
