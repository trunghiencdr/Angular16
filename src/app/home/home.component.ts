import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Hien';
  public age = 15;
  public districts: string[] = ['Choose district']
  public datas = [
    {
      city: 'Choose city'
    }
    ,{
    city: 'HCM',
    districts: ['District 1', 'District 2', 'District 3']
  }, {
    city: 'Tien Giang',
    districts: ['Cai Be', 'My Tho', 'Cai Lay', 'Chau Thanh']
  }];
  public resetName(): void {
    console.log('reset name function is called')
    this.name = '';
  }

  public cityChanged(event: any): void {
    console.log('city changed:', event.target.value)
    const city = event.target.value
    if(!city){
      return
    }
    this.districts = this.datas.find(data => data.city === city )?.districts || ['Choose district']
  }
}
