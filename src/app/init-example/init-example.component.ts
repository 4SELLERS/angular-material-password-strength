import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-init-example',
    templateUrl: './init-example.component.html',
    styleUrls: ['./init-example.component.scss'],
    standalone: false
})
export class InitExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
