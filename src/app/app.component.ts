import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngularPrj2';
  viewMode = 'list';
  myArray: any = ['Ravi', 'Mumbai', 'Rose' , 'Apple' ];
  students: any = [];

  onadd(name: string) {
    this.myArray.push(name);
  }

  onRemove(arr) {
    const index = this.myArray.indexOf(arr);
    this.myArray.splice(index, 1);
  }
}
