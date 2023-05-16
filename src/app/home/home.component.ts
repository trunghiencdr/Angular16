import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Hien';
  public age = 15;
  public fruits = ['Apple', 'Orange', 'Tomato'];
  public fruits2 = [{ name: 'Apple', price: 10, isSale: true },
  { name: 'Orange', price: -1, isSale: false },
  { name: 'Tomato', price: 12.21, isSale: true }];
  public resetName(): void {
    console.log('reset name function is called')
    this.name = '';
  }
}
