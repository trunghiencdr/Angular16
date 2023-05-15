import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Hien';
  public age = 15;
  public resetName(): void {
    console.log('reset name function is called')
    this.name = '';
  }
}
