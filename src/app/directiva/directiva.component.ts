import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  private listaCurso: String[] = [
    'TypeScript',
    'JavaScript',
    'Java SE',
    'C#',
    'PHP'
  ];

  private habilitar: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  private setHabilitar(): void {
    this.habilitar = !this.habilitar;
  }

}
