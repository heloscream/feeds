import { Component, OnInit } from '@angular/core';


 @Component({
  selector: 'app-ckedit',
  template: `
             <ckeditor [(ngModel)]="content" debounce="500">
      <p>Hello <strong>world</strong></p>
    </ckeditor>
    <div [innerHTML]="content"></div>
               `,
  styleUrls: ['./ckedit.component.css']
})
export class CkeditComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
