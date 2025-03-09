import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from "./common/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'angular-app';
}
