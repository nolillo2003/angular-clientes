import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Bienvenido a Angular 8';
  curso: String = 'Curso Spring 5 con Angular 8';
  profesor: String = 'Manuel Luis Soler Quesada';
}
